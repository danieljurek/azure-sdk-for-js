/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const DetectRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DetectRequest",
    modelProperties: {
      series: {
        serializedName: "series",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "TimeSeriesPoint" } }
        }
      },
      granularity: {
        serializedName: "granularity",
        type: {
          name: "Enum",
          allowedValues: [
            "yearly",
            "monthly",
            "weekly",
            "daily",
            "hourly",
            "minutely",
            "secondly",
            "microsecond",
            "none"
          ]
        }
      },
      customInterval: {
        serializedName: "customInterval",
        type: {
          name: "Number"
        }
      },
      period: {
        serializedName: "period",
        type: {
          name: "Number"
        }
      },
      maxAnomalyRatio: {
        serializedName: "maxAnomalyRatio",
        type: {
          name: "Number"
        }
      },
      sensitivity: {
        serializedName: "sensitivity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TimeSeriesPoint: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TimeSeriesPoint",
    modelProperties: {
      timestamp: {
        serializedName: "timestamp",
        type: {
          name: "DateTime"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DetectEntireResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DetectEntireResponse",
    modelProperties: {
      period: {
        serializedName: "period",
        required: true,
        type: {
          name: "Number"
        }
      },
      expectedValues: {
        serializedName: "expectedValues",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Number" } }
        }
      },
      upperMargins: {
        serializedName: "upperMargins",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Number" } }
        }
      },
      lowerMargins: {
        serializedName: "lowerMargins",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Number" } }
        }
      },
      isAnomaly: {
        serializedName: "isAnomaly",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Boolean" } }
        }
      },
      isNegativeAnomaly: {
        serializedName: "isNegativeAnomaly",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Boolean" } }
        }
      },
      isPositiveAnomaly: {
        serializedName: "isPositiveAnomaly",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Boolean" } }
        }
      }
    }
  }
};

export const AnomalyDetectorError: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorError",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DetectLastPointResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DetectLastPointResponse",
    modelProperties: {
      period: {
        serializedName: "period",
        required: true,
        type: {
          name: "Number"
        }
      },
      suggestedWindow: {
        serializedName: "suggestedWindow",
        required: true,
        type: {
          name: "Number"
        }
      },
      expectedValue: {
        serializedName: "expectedValue",
        required: true,
        type: {
          name: "Number"
        }
      },
      upperMargin: {
        serializedName: "upperMargin",
        required: true,
        type: {
          name: "Number"
        }
      },
      lowerMargin: {
        serializedName: "lowerMargin",
        required: true,
        type: {
          name: "Number"
        }
      },
      isAnomaly: {
        serializedName: "isAnomaly",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      isNegativeAnomaly: {
        serializedName: "isNegativeAnomaly",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      isPositiveAnomaly: {
        serializedName: "isPositiveAnomaly",
        required: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DetectChangePointRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DetectChangePointRequest",
    modelProperties: {
      series: {
        serializedName: "series",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "TimeSeriesPoint" } }
        }
      },
      granularity: {
        serializedName: "granularity",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "yearly",
            "monthly",
            "weekly",
            "daily",
            "hourly",
            "minutely",
            "secondly",
            "microsecond",
            "none"
          ]
        }
      },
      customInterval: {
        serializedName: "customInterval",
        type: {
          name: "Number"
        }
      },
      period: {
        serializedName: "period",
        type: {
          name: "Number"
        }
      },
      stableTrendWindow: {
        serializedName: "stableTrendWindow",
        type: {
          name: "Number"
        }
      },
      threshold: {
        serializedName: "threshold",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DetectChangePointResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DetectChangePointResponse",
    modelProperties: {
      period: {
        serializedName: "period",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      isChangePoint: {
        serializedName: "isChangePoint",
        type: {
          name: "Sequence",
          element: { type: { name: "Boolean" } }
        }
      },
      confidenceScores: {
        serializedName: "confidenceScores",
        type: {
          name: "Sequence",
          element: { type: { name: "Number" } }
        }
      }
    }
  }
};

export const ModelInfo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ModelInfo",
    modelProperties: {
      slidingWindow: {
        serializedName: "slidingWindow",
        type: {
          name: "Number"
        }
      },
      alignPolicy: {
        serializedName: "alignPolicy",
        type: {
          name: "Composite",
          className: "AlignPolicy"
        }
      },
      source: {
        serializedName: "source",
        required: true,
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      displayName: {
        constraints: {
          MaxLength: 24
        },
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["CREATED", "RUNNING", "READY", "FAILED"]
        }
      },
      errors: {
        serializedName: "errors",
        readOnly: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ErrorResponse" } }
        }
      },
      diagnosticsInfo: {
        serializedName: "diagnosticsInfo",
        type: {
          name: "Composite",
          className: "DiagnosticsInfo"
        }
      }
    }
  }
};

export const AlignPolicy: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AlignPolicy",
    modelProperties: {
      alignMode: {
        serializedName: "alignMode",
        type: {
          name: "Enum",
          allowedValues: ["Inner", "Outer"]
        }
      },
      fillNAMethod: {
        serializedName: "fillNAMethod",
        type: {
          name: "Enum",
          allowedValues: [
            "Previous",
            "Subsequent",
            "Linear",
            "Zero",
            "Pad",
            "NotFill"
          ]
        }
      },
      paddingValue: {
        serializedName: "paddingValue",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ErrorResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DiagnosticsInfo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiagnosticsInfo",
    modelProperties: {
      modelState: {
        serializedName: "modelState",
        type: {
          name: "Composite",
          className: "ModelState"
        }
      },
      variableStates: {
        serializedName: "variableStates",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "VariableState" } }
        }
      }
    }
  }
};

export const ModelState: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ModelState",
    modelProperties: {
      epochIds: {
        serializedName: "epochIds",
        type: {
          name: "Sequence",
          element: { type: { name: "Number" } }
        }
      },
      trainLosses: {
        serializedName: "trainLosses",
        type: {
          name: "Sequence",
          element: { type: { name: "Number" } }
        }
      },
      validationLosses: {
        serializedName: "validationLosses",
        type: {
          name: "Sequence",
          element: { type: { name: "Number" } }
        }
      },
      latenciesInSeconds: {
        serializedName: "latenciesInSeconds",
        type: {
          name: "Sequence",
          element: { type: { name: "Number" } }
        }
      }
    }
  }
};

export const VariableState: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VariableState",
    modelProperties: {
      variable: {
        serializedName: "variable",
        type: {
          name: "String"
        }
      },
      filledNARatio: {
        constraints: {
          InclusiveMaximum: 1
        },
        serializedName: "filledNARatio",
        type: {
          name: "Number"
        }
      },
      effectiveCount: {
        serializedName: "effectiveCount",
        type: {
          name: "Number"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "DateTime"
        }
      },
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ErrorResponse" } }
        }
      }
    }
  }
};

export const Model: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Model",
    modelProperties: {
      modelId: {
        serializedName: "modelId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      createdTime: {
        serializedName: "createdTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedTime: {
        serializedName: "lastUpdatedTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      modelInfo: {
        serializedName: "modelInfo",
        type: {
          name: "Composite",
          className: "ModelInfo"
        }
      }
    }
  }
};

export const DetectionRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DetectionRequest",
    modelProperties: {
      source: {
        serializedName: "source",
        required: true,
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        required: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const DetectionResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DetectionResult",
    modelProperties: {
      resultId: {
        serializedName: "resultId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      summary: {
        serializedName: "summary",
        type: {
          name: "Composite",
          className: "DetectionResultSummary"
        }
      },
      results: {
        serializedName: "results",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "AnomalyState" } }
        }
      }
    }
  }
};

export const DetectionResultSummary: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DetectionResultSummary",
    modelProperties: {
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["CREATED", "RUNNING", "READY", "FAILED"]
        }
      },
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ErrorResponse" } }
        }
      },
      variableStates: {
        serializedName: "variableStates",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "VariableState" } }
        }
      },
      setupInfo: {
        serializedName: "setupInfo",
        type: {
          name: "Composite",
          className: "DetectionRequest"
        }
      }
    }
  }
};

export const AnomalyState: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyState",
    modelProperties: {
      timestamp: {
        serializedName: "timestamp",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "AnomalyValue"
        }
      },
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ErrorResponse" } }
        }
      }
    }
  }
};

export const AnomalyValue: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyValue",
    modelProperties: {
      contributors: {
        serializedName: "contributors",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "AnomalyContributor" }
          }
        }
      },
      isAnomaly: {
        serializedName: "isAnomaly",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      severity: {
        constraints: {
          InclusiveMaximum: 1
        },
        serializedName: "severity",
        required: true,
        type: {
          name: "Number"
        }
      },
      score: {
        constraints: {
          InclusiveMaximum: 2
        },
        serializedName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AnomalyContributor: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyContributor",
    modelProperties: {
      contributionScore: {
        constraints: {
          InclusiveMaximum: 2
        },
        serializedName: "contributionScore",
        type: {
          name: "Number"
        }
      },
      variable: {
        serializedName: "variable",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ModelList: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ModelList",
    modelProperties: {
      models: {
        serializedName: "models",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ModelSnapshot" } }
        }
      },
      currentCount: {
        serializedName: "currentCount",
        required: true,
        type: {
          name: "Number"
        }
      },
      maxCount: {
        serializedName: "maxCount",
        required: true,
        type: {
          name: "Number"
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ModelSnapshot: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ModelSnapshot",
    modelProperties: {
      modelId: {
        serializedName: "modelId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      createdTime: {
        serializedName: "createdTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedTime: {
        serializedName: "lastUpdatedTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      status: {
        serializedName: "status",
        required: true,
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["CREATED", "RUNNING", "READY", "FAILED"]
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      variablesCount: {
        serializedName: "variablesCount",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GeneratedClientTrainMultivariateModelHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientTrainMultivariateModelHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientDetectAnomalyHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientDetectAnomalyHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientExportModelHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientExportModelHeaders",
    modelProperties: {
      contentType: {
        serializedName: "content-type",
        type: {
          name: "String"
        }
      }
    }
  }
};
