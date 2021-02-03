#npm install -g @cspell/dict-java
#cspell link add @cspell/dict-java

$cspellOutput = @{}; 

$overallTime = Measure-Command { 
  Start-Process `
    -Wait `
    -NoNewWindow `
    -FilePath 'npx.cmd' `
    -ArgumentList 'cspell lint --config .\cspell.json --no-summary --exclude cspell.ps1 **/*' `
    -RedirectStandardOutput spelling-errors.txt `
    -RedirectStandardError spelling-perf.txt
}

$cspellErrors = Get-Content spelling-errors.txt
$cspellOutput = Get-Content spelling-perf.txt

Write-Host $overallTime

# Add spelling errors to ignore
$spellingErrors = $cspellErrors `
| ForEach-Object {
  $line = $_; 
  $_ -match 'Unknown word \((.*)\)' | Out-Null;

  $file = $line.Substring(0, $line.LastIndexOf(':', $line.LastIndexOf(':') - 1));
  $word = $Matches[1];

  return @{
    Line = $line;
    File = $file;
    Word = $word;
  }
}

$filesToIgnore = $spellingErrors | ForEach-Object { $_.File.Substring((Get-Location).Path.Length + 1) }

$uniqueFilesToIgnore = @{}
$filesToIgnore | ForEach-Object { $_.Replace("\", '/') } | ForEach-Object { $uniqueFilesToIgnore[$_] = $null }

$cspellConfig = Get-Content cspell.json | ConvertFrom-Json
$cspellConfig.ignorePaths += $uniqueFilesToIgnore.Keys | Sort-Object 
$cspellConfig | ConvertTo-Json | Set-Content cspell.json

$cspellErrors | Set-Content .\spelling-errors.txt
Write-Host "Added $($uniqueFilesToIgnore.Keys.Count) files to list"

# Output Performance Information
$spellingPerf = $cspellOutput `
| Where-Object { $_.Trim().EndsWith('-') -ne $true }
| ForEach-Object { 
  $line = $_.Trim(); 
  $firstSpace = $line.IndexOf(' ');
  $lastSpace = $line.LastIndexOf(' ');

  $file = $line.Substring($firstSpace + 1, $lastSpace - $firstSpace - 1);

  @{ 
    Progress  = $line.Split(' ')[0];
    File      = $file;
    Extension = [System.IO.Path]::GetExtension($file);
    Time      = $line.Substring($lastSpace + 1, $line.Length - $lastSpace - 3);
  }
}

"Progress,File,Extension,Time" | Set-Content spelling-perf.csv 
$spellingPerf | ForEach-Object { "$($_.Progress),$($_.File),$($_.Extension),$($_.Time)" } | Add-Content spelling-perf.csv

Import-Csv spelling-perf.csv `
| Group-Object Extension `
| ForEach-Object { [PSCustomObject]@{ Extension = $_.Name; Total = ($_.Group | Measure-Object Time -Sum).Sum } } `
| Sort-Object Total -Descending `
| Format-Table
