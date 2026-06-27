// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module a8s
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=partial  jaccard=0.0884  score=1  fileCov=0.0884
// note: low-confidence suggestion: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var a8s = E(() => {
  Und = {
    AVAILABLE: "AVAILABLE",
    ERROR: "ERROR",
    NOT_AVAILABLE: "NOT_AVAILABLE",
    PENDING: "PENDING"
  }, Fnd = {
    IMPOSSIBLE: "IMPOSSIBLE",
    INVALID: "INVALID",
    NO_TRANSLATION: "NO_TRANSLATION",
    SATISFIABLE: "SATISFIABLE",
    TOO_COMPLEX: "TOO_COMPLEX",
    TRANSLATION_AMBIGUOUS: "TRANSLATION_AMBIGUOUS",
    VALID: "VALID"
  }, jnd = {
    IMPORT_POLICY: "IMPORT_POLICY",
    INGEST_CONTENT: "INGEST_CONTENT",
    REFINE_POLICY: "REFINE_POLICY"
  }, Gnd = {
    PDF: "pdf",
    TEXT: "txt"
  }, Wnd = {
    BUILDING: "BUILDING",
    CANCELLED: "CANCELLED",
    CANCEL_REQUESTED: "CANCEL_REQUESTED",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    PREPROCESSING: "PREPROCESSING",
    SCHEDULED: "SCHEDULED",
    TESTING: "TESTING"
  }, qnd = {
    BUILD_LOG: "BUILD_LOG",
    GENERATED_TEST_CASES: "GENERATED_TEST_CASES",
    POLICY_DEFINITION: "POLICY_DEFINITION",
    QUALITY_REPORT: "QUALITY_REPORT"
  }, Vnd = {
    ERROR: "ERROR",
    INFO: "INFO",
    WARNING: "WARNING"
  }, znd = {
    APPLIED: "APPLIED",
    FAILED: "FAILED"
  }, Knd = {
    ALWAYS_FALSE: "ALWAYS_FALSE",
    ALWAYS_TRUE: "ALWAYS_TRUE"
  }, Ynd = {
    FAILED: "FAILED",
    PASSED: "PASSED"
  }, Xnd = {
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
    NOT_STARTED: "NOT_STARTED",
    SCHEDULED: "SCHEDULED"
  }, Jnd = {
    INCOMPATIBLE_ENDPOINT: "INCOMPATIBLE_ENDPOINT",
    REGISTERED: "REGISTERED"
  }, Qnd = {
    ACTIVE: "Active",
    CREATING: "Creating",
    FAILED: "Failed"
  }, Znd = {
    CREATION_TIME: "CreationTime"
  }, erd = {
    ASCENDING: "Ascending",
    DESCENDING: "Descending"
  }, trd = {
    CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
    DISTILLATION: "DISTILLATION",
    FINE_TUNING: "FINE_TUNING",
    IMPORTED: "IMPORTED"
  }, nrd = {
    ACTIVE: "Active",
    CREATING: "Creating",
    FAILED: "Failed"
  }, rrd = {
    COMPLETED: "Completed",
    DELETING: "Deleting",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    STOPPED: "Stopped",
    STOPPING: "Stopping"
  }, ord = {
    MODEL_EVALUATION: "ModelEvaluation",
    RAG_EVALUATION: "RagEvaluation"
  }, srd = {
    CLASSIFICATION: "Classification",
    CUSTOM: "Custom",
    GENERATION: "Generation",
    QUESTION_AND_ANSWER: "QuestionAndAnswer",
    SUMMARIZATION: "Summarization"
  }, ird = {
    OPTIMIZED: "optimized",
    STANDARD: "standard"
  }, ard = {
    BYTE_CONTENT: "BYTE_CONTENT",
    S3: "S3"
  }, lrd = {
    QUERY_DECOMPOSITION: "QUERY_DECOMPOSITION"
  }, crd = {
    BOOLEAN: "BOOLEAN",
    NUMBER: "NUMBER",
    STRING: "STRING",
    STRING_LIST: "STRING_LIST"
  }, urd = {
    HYBRID: "HYBRID",
    SEMANTIC: "SEMANTIC"
  }, drd = {
    ALL: "ALL",
    SELECTIVE: "SELECTIVE"
  }, prd = {
    BEDROCK_RERANKING_MODEL: "BEDROCK_RERANKING_MODEL"
  }, frd = {
    EXTERNAL_SOURCES: "EXTERNAL_SOURCES",
    KNOWLEDGE_BASE: "KNOWLEDGE_BASE"
  }, mrd = {
    AUTOMATED: "Automated",
    HUMAN: "Human"
  }, grd = {
    CREATION_TIME: "CreationTime"
  }, hrd = {
    BLOCK: "BLOCK",
    NONE: "NONE"
  }, yrd = {
    IMAGE: "IMAGE",
    TEXT: "TEXT"
  }, _rd = {
    HIGH: "HIGH",
    LOW: "LOW",
    MEDIUM: "MEDIUM",
    NONE: "NONE"
  }, brd = {
    HATE: "HATE",
    INSULTS: "INSULTS",
    MISCONDUCT: "MISCONDUCT",
    PROMPT_ATTACK: "PROMPT_ATTACK",
    SEXUAL: "SEXUAL",
    VIOLENCE: "VIOLENCE"
  }, Srd = {
    CLASSIC: "CLASSIC",
    STANDARD: "STANDARD"
  }, Erd = {
    BLOCK: "BLOCK",
    NONE: "NONE"
  }, Ard = {
    GROUNDING: "GROUNDING",
    RELEVANCE: "RELEVANCE"
  }, Hrd = {
    ANONYMIZE: "ANONYMIZE",
    BLOCK: "BLOCK",
    NONE: "NONE"
  }, Trd = {
    ADDRESS: "ADDRESS",
    AGE: "AGE",
    AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
    AWS_SECRET_KEY: "AWS_SECRET_KEY",
    CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
    CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
    CREDIT_DEBIT_CARD_CVV: "CREDIT_DEBIT_CARD_CVV",
    CREDIT_DEBIT_CARD_EXPIRY: "CREDIT_DEBIT_CARD_EXPIRY",
    CREDIT_DEBIT_CARD_NUMBER: "CREDIT_DEBIT_CARD_NUMBER",
    DRIVER_ID: "DRIVER_ID",
    EMAIL: "EMAIL",
    INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
    IP_ADDRESS: "IP_ADDRESS",
    LICENSE_PLATE: "LICENSE_PLATE",
    MAC_ADDRESS: "MAC_ADDRESS",
    NAME: "NAME",
    PASSWORD: "PASSWORD",
    PHONE: "PHONE",
    PIN: "PIN",
    SWIFT_CODE: "SWIFT_CODE",
    UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
    UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
    UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
    URL: "URL",
    USERNAME: "USERNAME",
    US_BANK_ACCOUNT_NUMBER: "US_BANK_ACCOUNT_NUMBER",
    US_BANK_ROUTING_NUMBER: "US_BANK_ROUTING_NUMBER",
    US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
    US_PASSPORT_NUMBER: "US_PASSPORT_NUMBER",
    US_SOCIAL_SECURITY_NUMBER: "US_SOCIAL_SECURITY_NUMBER",
    VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER"
  }, vrd = {
    CLASSIC: "CLASSIC",
    STANDARD: "STANDARD"
  }, wrd = {
    BLOCK: "BLOCK",
    NONE: "NONE"
  }, Crd = {
    DENY: "DENY"
  }, Ird = {
    BLOCK: "BLOCK",
    NONE: "NONE"
  }, xrd = {
    PROFANITY: "PROFANITY"
  }, krd = {
    CREATING: "CREATING",
    DELETING: "DELETING",
    FAILED: "FAILED",
    READY: "READY",
    UPDATING: "UPDATING",
    VERSIONING: "VERSIONING"
  }, Rrd = {
    ACTIVE: "ACTIVE"
  }, Lrd = {
    APPLICATION: "APPLICATION",
    SYSTEM_DEFINED: "SYSTEM_DEFINED"
  }, Drd = {
    COMPLETED: "Completed",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress"
  }, Prd = {
    COMPLETED: "Completed",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress"
  }, Mrd = {
    JSONL: "JSONL"
  }, $rd = {
    COMPLETED: "Completed",
    EXPIRED: "Expired",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    PARTIALLY_COMPLETED: "PartiallyCompleted",
    SCHEDULED: "Scheduled",
    STOPPED: "Stopped",
    STOPPING: "Stopping",
    SUBMITTED: "Submitted",
    VALIDATING: "Validating"
  }, Ord = {
    CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
    DISTILLATION: "DISTILLATION",
    FINE_TUNING: "FINE_TUNING"
  }, Nrd = {
    ON_DEMAND: "ON_DEMAND",
    PROVISIONED: "PROVISIONED"
  }, Brd = {
    EMBEDDING: "EMBEDDING",
    IMAGE: "IMAGE",
    TEXT: "TEXT"
  }, Urd = {
    ACTIVE: "ACTIVE",
    LEGACY: "LEGACY"
  }, Frd = {
    AVAILABLE: "AVAILABLE"
  }, jrd = {
    CUSTOM: "custom",
    DEFAULT: "default"
  }, Grd = {
    ONE_MONTH: "OneMonth",
    SIX_MONTHS: "SixMonths"
  }, Wrd = {
    CREATING: "Creating",
    FAILED: "Failed",
    IN_SERVICE: "InService",
    UPDATING: "Updating"
  }, qrd = {
    CREATION_TIME: "CreationTime"
  }, Vrd = {
    AUTHORIZED: "AUTHORIZED",
    NOT_AUTHORIZED: "NOT_AUTHORIZED"
  }, zrd = {
    AVAILABLE: "AVAILABLE",
    NOT_AVAILABLE: "NOT_AVAILABLE"
  }, Krd = {
    AVAILABLE: "AVAILABLE",
    NOT_AVAILABLE: "NOT_AVAILABLE"
  }, Yrd = {
    ALL: "ALL",
    PUBLIC: "PUBLIC"
  }, Xrd = {
    COMPLETED: "Completed",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    STOPPED: "Stopped",
    STOPPING: "Stopping"
  }, Jrd = {
    COMPLETED: "Completed",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    NOT_STARTED: "NotStarted",
    STOPPED: "Stopped",
    STOPPING: "Stopping"
  }, Qrd = {
    COMPLETED: "Completed",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
    STOPPED: "Stopped",
    STOPPING: "Stopping"
  };
});
var ODt = {};
_t(ODt, {
  paginateListProvisionedModelThroughputs: () => Bnd,
  paginateListPromptRouters: () => Nnd,
  paginateListModelInvocationJobs: () => Ond,
  paginateListModelImportJobs: () => $nd,
  paginateListModelCustomizationJobs: () => Mnd,
  paginateListModelCopyJobs: () => Pnd,
  paginateListMarketplaceModelEndpoints: () => Dnd,
  paginateListInferenceProfiles: () => Lnd,
  paginateListImportedModels: () => Rnd,
  paginateListGuardrails: () => knd,
  paginateListEvaluationJobs: () => xnd,
  paginateListCustomModels: () => Ind,
  paginateListCustomModelDeployments: () => Cnd,
  paginateListAutomatedReasoningPolicyTestResults: () => wnd,
  paginateListAutomatedReasoningPolicyTestCases: () => vnd,
  paginateListAutomatedReasoningPolicyBuildWorkflows: () => Tnd,
  paginateListAutomatedReasoningPolicies: () => Hnd,
  __Client: () => SDt,
  VectorSearchRerankingConfigurationType: () => prd,
  ValidationException: () => wDt,
  UpdateProvisionedModelThroughputCommand: () => Ybn,
  UpdateMarketplaceModelEndpointCommand: () => Kbn,
  UpdateGuardrailCommand: () => zbn,
  UpdateAutomatedReasoningPolicyTestCaseCommand: () => Vbn,
  UpdateAutomatedReasoningPolicyCommand: () => qbn,
  UpdateAutomatedReasoningPolicyAnnotationsCommand: () => Wbn,
  UntagResourceCommand: () => Gbn,
  TooManyTagsException: () => xDt,
  ThrottlingException: () => vDt,
  TagResourceCommand: () => jbn,
  StopModelInvocationJobCommand: () => Fbn,
  StopModelCustomizationJobCommand: () => Ubn,
  StopEvaluationJobCommand: () => Bbn,
  Status: () => Jnd,
  StartAutomatedReasoningPolicyTestWorkflowCommand: () => Nbn,
  StartAutomatedReasoningPolicyBuildWorkflowCommand: () => Obn,
  SortOrder: () => erd,
  SortModelsBy: () => Znd,
  SortJobsBy: () => grd,
  SortByProvisionedModels: () => qrd,
  ServiceUnavailableException: () => RDt,
  ServiceQuotaExceededException: () => IDt,
  SearchType: () => urd,
  S3InputFormat: () => Mrd,
  RetrieveAndGenerateType: () => frd,
  ResourceNotFoundException: () => TDt,
  ResourceInUseException: () => kDt,
  RerankingMetadataSelectionMode: () => drd,
  RegisterMarketplaceModelEndpointCommand: () => $bn,
  RegionAvailability: () => Krd,
  QueryTransformationType: () => lrd,
  PutUseCaseForModelAccessCommand: () => Mbn,
  PutModelInvocationLoggingConfigurationCommand: () => Pbn,
  ProvisionedModelStatus: () => Wrd,
  PromptRouterType: () => jrd,
  PromptRouterStatus: () => Frd,
  PerformanceConfigLatency: () => ird,
  OfferType: () => Yrd,
  ModelStatus: () => nrd,
  ModelModality: () => Brd,
  ModelInvocationJobStatus: () => $rd,
  ModelImportJobStatus: () => Prd,
  ModelCustomizationJobStatus: () => Xrd,
  ModelCustomization: () => Ord,
  ModelCopyJobStatus: () => Drd,
  ListTagsForResourceCommand: () => Dbn,
  ListProvisionedModelThroughputsCommand: () => pnt,
  ListPromptRoutersCommand: () => dnt,
  ListModelInvocationJobsCommand: () => unt,
  ListModelImportJobsCommand: () => cnt,
  ListModelCustomizationJobsCommand: () => lnt,
  ListModelCopyJobsCommand: () => ant,
  ListMarketplaceModelEndpointsCommand: () => int,
  ListInferenceProfilesCommand: () => snt,
  ListImportedModelsCommand: () => ont,
  ListGuardrailsCommand: () => rnt,
  ListFoundationModelsCommand: () => Abn,
  ListFoundationModelAgreementOffersCommand: () => Ebn,
  ListEvaluationJobsCommand: () => nnt,
  ListCustomModelsCommand: () => tnt,
  ListCustomModelDeploymentsCommand: () => ent,
  ListAutomatedReasoningPolicyTestResultsCommand: () => Ztt,
  ListAutomatedReasoningPolicyTestCasesCommand: () => Qtt,
  ListAutomatedReasoningPolicyBuildWorkflowsCommand: () => Jtt,
  ListAutomatedReasoningPoliciesCommand: () => Xtt,
  JobStatusDetails: () => Jrd,
  InternalServerException: () => HDt,
  InferenceType: () => Nrd,
  InferenceProfileType: () => Lrd,
  InferenceProfileStatus: () => Rrd,
  GuardrailWordAction: () => Ird,
  GuardrailTopicsTierName: () => vrd,
  GuardrailTopicType: () => Crd,
  GuardrailTopicAction: () => wrd,
  GuardrailStatus: () => krd,
  GuardrailSensitiveInformationAction: () => Hrd,
  GuardrailPiiEntityType: () => Trd,
  GuardrailModality: () => yrd,
  GuardrailManagedWordsType: () => xrd,
  GuardrailFilterStrength: () => _rd,
  GuardrailContextualGroundingFilterType: () => Ard,
  GuardrailContextualGroundingAction: () => Erd,
  GuardrailContentFiltersTierName: () => Srd,
  GuardrailContentFilterType: () => brd,
  GuardrailContentFilterAction: () => hrd,
  GetUseCaseForModelAccessCommand: () => fbn,
  GetProvisionedModelThroughputCommand: () => pbn,
  GetPromptRouterCommand: () => dbn,
  GetModelInvocationLoggingConfigurationCommand: () => ubn,
  GetModelInvocationJobCommand: () => cbn,
  GetModelImportJobCommand: () => lbn,
  GetModelCustomizationJobCommand: () => abn,
  GetModelCopyJobCommand: () => ibn,
  GetMarketplaceModelEndpointCommand: () => sbn,
  GetInferenceProfileCommand: () => obn,
  GetImportedModelCommand: () => rbn,
  GetGuardrailCommand: () => nbn,
  GetFoundationModelCommand: () => tbn,
  GetFoundationModelAvailabilityCommand: () => ebn,
  GetEvaluationJobCommand: () => Z_n,
  GetCustomModelDeploymentCommand: () => Q_n,
  GetCustomModelCommand: () => J_n,
  GetAutomatedReasoningPolicyTestResultCommand: () => X_n,
  GetAutomatedReasoningPolicyTestCaseCommand: () => Y_n,
  GetAutomatedReasoningPolicyNextScenarioCommand: () => K_n,
  GetAutomatedReasoningPolicyCommand: () => z_n,
  GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand: () => V_n,
  GetAutomatedReasoningPolicyBuildWorkflowCommand: () => q_n,
  GetAutomatedReasoningPolicyAnnotationsCommand: () => W_n,
  FoundationModelLifecycleStatus: () => Urd,
  FineTuningJobStatus: () => Qrd,
  ExternalSourceType: () => ard,
  ExportAutomatedReasoningPolicyVersionCommand: () => G_n,
  EvaluationTaskType: () => srd,
  EvaluationJobType: () => mrd,
  EvaluationJobStatus: () => rrd,
  EntitlementAvailability: () => zrd,
  DeregisterMarketplaceModelEndpointCommand: () => j_n,
  DeleteProvisionedModelThroughputCommand: () => F_n,
  DeletePromptRouterCommand: () => U_n,
  DeleteModelInvocationLoggingConfigurationCommand: () => B_n,
  DeleteMarketplaceModelEndpointCommand: () => N_n,
  DeleteInferenceProfileCommand: () => O_n,
  DeleteImportedModelCommand: () => $_n,
  DeleteGuardrailCommand: () => M_n,
  DeleteFoundationModelAgreementCommand: () => P_n,
  DeleteCustomModelDeploymentCommand: () => D_n,
  DeleteCustomModelCommand: () => L_n,
  DeleteAutomatedReasoningPolicyTestCaseCommand: () => R_n,
  DeleteAutomatedReasoningPolicyCommand: () => k_n,
  DeleteAutomatedReasoningPolicyBuildWorkflowCommand: () => x_n,
  CustomizationType: () => trd,
  CustomModelDeploymentStatus: () => Qnd,
  CreateProvisionedModelThroughputCommand: () => I_n,
  CreatePromptRouterCommand: () => C_n,
  CreateModelInvocationJobCommand: () => w_n,
  CreateModelImportJobCommand: () => v_n,
  CreateModelCustomizationJobCommand: () => T_n,
  CreateModelCopyJobCommand: () => H_n,
  CreateMarketplaceModelEndpointCommand: () => A_n,
  CreateInferenceProfileCommand: () => E_n,
  CreateGuardrailVersionCommand: () => S_n,
  CreateGuardrailCommand: () => b_n,
  CreateFoundationModelAgreementCommand: () => __n,
  CreateEvaluationJobCommand: () => y_n,
  CreateCustomModelDeploymentCommand: () => h_n,
  CreateCustomModelCommand: () => g_n,
  CreateAutomatedReasoningPolicyVersionCommand: () => m_n,
  CreateAutomatedReasoningPolicyTestCaseCommand: () => f_n,
  CreateAutomatedReasoningPolicyCommand: () => p_n,
  ConflictException: () => CDt,
  CommitmentDuration: () => Grd,
  CancelAutomatedReasoningPolicyBuildWorkflowCommand: () => d_n,
  BedrockServiceException: () => JO,
  BedrockClient: () => ng,
  Bedrock: () => BNr,
  BatchDeleteEvaluationJobCommand: () => u_n,
  AutomatedReasoningPolicyTestRunStatus: () => Xnd,
  AutomatedReasoningPolicyTestRunResult: () => Ynd,
  AutomatedReasoningPolicyBuildWorkflowType: () => jnd,
  AutomatedReasoningPolicyBuildWorkflowStatus: () => Wnd,
  AutomatedReasoningPolicyBuildResultAssetType: () => qnd,
  AutomatedReasoningPolicyBuildMessageType: () => Vnd,
  AutomatedReasoningPolicyBuildDocumentContentType: () => Gnd,
  AutomatedReasoningPolicyAnnotationStatus: () => znd,
  AutomatedReasoningCheckResult: () => Fnd,
  AutomatedReasoningCheckLogicWarningType: () => Knd,
  AuthorizationStatus: () => Vrd,
  AttributeType: () => crd,
  ApplicationType: () => ord,
  AgreementStatus: () => Und,
  AccessDeniedException: () => ADt,
  $Command: () => xr
});