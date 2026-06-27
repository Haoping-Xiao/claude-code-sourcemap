// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H9s
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var H9s = E(() => {
  Zs();
  jR();
  h1r();
  y1r();
  _1r();
  b1r();
  S1r();
  E1r();
  A1r();
  H1r();
  T1r();
  v1r();
  w1r();
  C1r();
  I1r();
  x1r();
  k1r();
  R1r();
  L1r();
  D1r();
  P1r();
  M1r();
  $1r();
  O1r();
  N1r();
  B1r();
  U1r();
  F1r();
  j1r();
  G1r();
  W1r();
  q1r();
  V1r();
  z1r();
  K1r();
  Y1r();
  X1r();
  J1r();
  Q1r();
  Z1r();
  eNr();
  tNr();
  nNr();
  rNr();
  oNr();
  sNr();
  iNr();
  aNr();
  lNr();
  cNr();
  uNr();
  dNr();
  pNr();
  fNr();
  mNr();
  gNr();
  hNr();
  yNr();
  _Nr();
  bNr();
  mbn();
  gbn();
  hbn();
  ybn();
  _bn();
  bbn();
  Sbn();
  SNr();
  ENr();
  Hbn();
  Tbn();
  vbn();
  wbn();
  Cbn();
  Ibn();
  xbn();
  kbn();
  Rbn();
  Lbn();
  ANr();
  HNr();
  TNr();
  vNr();
  wNr();
  CNr();
  INr();
  xNr();
  kNr();
  RNr();
  LNr();
  DNr();
  PNr();
  MNr();
  $Nr();
  ONr();
  NNr();
  And = {
    BatchDeleteEvaluationJobCommand: u_n,
    CancelAutomatedReasoningPolicyBuildWorkflowCommand: d_n,
    CreateAutomatedReasoningPolicyCommand: p_n,
    CreateAutomatedReasoningPolicyTestCaseCommand: f_n,
    CreateAutomatedReasoningPolicyVersionCommand: m_n,
    CreateCustomModelCommand: g_n,
    CreateCustomModelDeploymentCommand: h_n,
    CreateEvaluationJobCommand: y_n,
    CreateFoundationModelAgreementCommand: __n,
    CreateGuardrailCommand: b_n,
    CreateGuardrailVersionCommand: S_n,
    CreateInferenceProfileCommand: E_n,
    CreateMarketplaceModelEndpointCommand: A_n,
    CreateModelCopyJobCommand: H_n,
    CreateModelCustomizationJobCommand: T_n,
    CreateModelImportJobCommand: v_n,
    CreateModelInvocationJobCommand: w_n,
    CreatePromptRouterCommand: C_n,
    CreateProvisionedModelThroughputCommand: I_n,
    DeleteAutomatedReasoningPolicyCommand: k_n,
    DeleteAutomatedReasoningPolicyBuildWorkflowCommand: x_n,
    DeleteAutomatedReasoningPolicyTestCaseCommand: R_n,
    DeleteCustomModelCommand: L_n,
    DeleteCustomModelDeploymentCommand: D_n,
    DeleteFoundationModelAgreementCommand: P_n,
    DeleteGuardrailCommand: M_n,
    DeleteImportedModelCommand: $_n,
    DeleteInferenceProfileCommand: O_n,
    DeleteMarketplaceModelEndpointCommand: N_n,
    DeleteModelInvocationLoggingConfigurationCommand: B_n,
    DeletePromptRouterCommand: U_n,
    DeleteProvisionedModelThroughputCommand: F_n,
    DeregisterMarketplaceModelEndpointCommand: j_n,
    ExportAutomatedReasoningPolicyVersionCommand: G_n,
    GetAutomatedReasoningPolicyCommand: z_n,
    GetAutomatedReasoningPolicyAnnotationsCommand: W_n,
    GetAutomatedReasoningPolicyBuildWorkflowCommand: q_n,
    GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand: V_n,
    GetAutomatedReasoningPolicyNextScenarioCommand: K_n,
    GetAutomatedReasoningPolicyTestCaseCommand: Y_n,
    GetAutomatedReasoningPolicyTestResultCommand: X_n,
    GetCustomModelCommand: J_n,
    GetCustomModelDeploymentCommand: Q_n,
    GetEvaluationJobCommand: Z_n,
    GetFoundationModelCommand: tbn,
    GetFoundationModelAvailabilityCommand: ebn,
    GetGuardrailCommand: nbn,
    GetImportedModelCommand: rbn,
    GetInferenceProfileCommand: obn,
    GetMarketplaceModelEndpointCommand: sbn,
    GetModelCopyJobCommand: ibn,
    GetModelCustomizationJobCommand: abn,
    GetModelImportJobCommand: lbn,
    GetModelInvocationJobCommand: cbn,
    GetModelInvocationLoggingConfigurationCommand: ubn,
    GetPromptRouterCommand: dbn,
    GetProvisionedModelThroughputCommand: pbn,
    GetUseCaseForModelAccessCommand: fbn,
    ListAutomatedReasoningPoliciesCommand: Xtt,
    ListAutomatedReasoningPolicyBuildWorkflowsCommand: Jtt,
    ListAutomatedReasoningPolicyTestCasesCommand: Qtt,
    ListAutomatedReasoningPolicyTestResultsCommand: Ztt,
    ListCustomModelDeploymentsCommand: ent,
    ListCustomModelsCommand: tnt,
    ListEvaluationJobsCommand: nnt,
    ListFoundationModelAgreementOffersCommand: Ebn,
    ListFoundationModelsCommand: Abn,
    ListGuardrailsCommand: rnt,
    ListImportedModelsCommand: ont,
    ListInferenceProfilesCommand: snt,
    ListMarketplaceModelEndpointsCommand: int,
    ListModelCopyJobsCommand: ant,
    ListModelCustomizationJobsCommand: lnt,
    ListModelImportJobsCommand: cnt,
    ListModelInvocationJobsCommand: unt,
    ListPromptRoutersCommand: dnt,
    ListProvisionedModelThroughputsCommand: pnt,
    ListTagsForResourceCommand: Dbn,
    PutModelInvocationLoggingConfigurationCommand: Pbn,
    PutUseCaseForModelAccessCommand: Mbn,
    RegisterMarketplaceModelEndpointCommand: $bn,
    StartAutomatedReasoningPolicyBuildWorkflowCommand: Obn,
    StartAutomatedReasoningPolicyTestWorkflowCommand: Nbn,
    StopEvaluationJobCommand: Bbn,
    StopModelCustomizationJobCommand: Ubn,
    StopModelInvocationJobCommand: Fbn,
    TagResourceCommand: jbn,
    UntagResourceCommand: Gbn,
    UpdateAutomatedReasoningPolicyCommand: qbn,
    UpdateAutomatedReasoningPolicyAnnotationsCommand: Wbn,
    UpdateAutomatedReasoningPolicyTestCaseCommand: Vbn,
    UpdateGuardrailCommand: zbn,
    UpdateMarketplaceModelEndpointCommand: Kbn,
    UpdateProvisionedModelThroughputCommand: Ybn
  };
  BNr = class BNr extends ng {};
  jOr(And, BNr);
});