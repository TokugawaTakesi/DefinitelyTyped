import ES2015Operations = require('./2015');
import ES2016 = require('../es2016');

interface ES2016Operations extends Record<keyof ES2016, string>, ES2015Operations {
    // Unimplemented operations:
    abs: string;
    AddRestrictedFunctionProperties: string;
    AllocateArrayBuffer: string;
    AllocateTypedArray: string;
    AllocateTypedArrayBuffer: string;
    BlockDeclarationInstantiation: string;
    BoundFunctionCreate: string;
    Canonicalize: string;
    CharacterRange: string;
    CharacterRangeOrUnion: string;
    CharacterSetMatcher: string;
    CloneArrayBuffer: string;
    Completion: string;
    CopyDataBlockBytes: string;
    CreateArrayIterator: string;
    CreateBuiltinFunction: string;
    CreateByteDataBlock: string;
    CreateDynamicFunction: string;
    CreateIntrinsics: string;
    CreateMapIterator: string;
    CreateMappedArgumentsObject: string;
    CreatePerIterationEnvironment: string;
    CreateRealm: string;
    CreateResolvingFunctions: string;
    CreateSetIterator: string;
    CreateStringIterator: string;
    CreateUnmappedArgumentsObject: string;
    Decode: string;
    DetachArrayBuffer: string;
    Encode: string;
    EnqueueJob: string;
    EnumerateObjectProperties: string;
    EscapeRegExpPattern: string;
    EvalDeclarationInstantiation: string;
    EvaluateCall: string;
    EvaluateDirectCall: string;
    EvaluateNew: string;
    floor: string;
    ForBodyEvaluation: string;
    'ForIn/OfBodyEvaluation': string;
    'ForIn/OfHeadEvaluation': string;
    FulfillPromise: string;
    FunctionAllocate: string;
    FunctionCreate: string;
    FunctionDeclarationInstantiation: string;
    FunctionInitialize: string;
    GeneratorFunctionCreate: string;
    GeneratorResume: string;
    GeneratorResumeAbrupt: string;
    GeneratorStart: string;
    GeneratorValidate: string;
    GeneratorYield: string;
    GetActiveScriptOrModule: string;
    GetFunctionRealm: string;
    GetGlobalObject: string;
    GetIdentifierReference: string;
    GetModuleNamespace: string;
    GetNewTarget: string;
    GetSuperConstructor: string;
    GetTemplateObject: string;
    GetThisEnvironment: string;
    GetThisValue: string;
    GetValue: string;
    GetValueFromBuffer: string;
    GetViewValue: string;
    GlobalDeclarationInstantiation: string;
    HostPromiseRejectionTracker: string;
    HostReportErrors: string;
    HostResolveImportedModule: string;
    IfAbruptRejectPromise: string;
    ImportedLocalNames: string;
    InitializeBoundName: string;
    InitializeHostDefinedRealm: string;
    InitializeReferencedBinding: string;
    IntegerIndexedElementGet: string;
    IntegerIndexedElementSet: string;
    IntegerIndexedObjectCreate: string;
    InternalizeJSONProperty: string;
    IsAnonymousFunctionDefinition: string;
    IsCompatiblePropertyDescriptor: string;
    IsDetachedBuffer: string;
    IsInTailPosition: string;
    IsLabelledFunction: string;
    IsWordChar: string;
    LocalTime: string;
    LoopContinues: string;
    MakeArgGetter: string;
    MakeArgSetter: string;
    MakeClassConstructor: string;
    MakeConstructor: string;
    MakeMethod: string;
    MakeSuperPropertyReference: string;
    max: string;
    min: string;
    ModuleNamespaceCreate: string;
    NewDeclarativeEnvironment: string;
    NewFunctionEnvironment: string;
    NewGlobalEnvironment: string;
    NewModuleEnvironment: string;
    NewObjectEnvironment: string;
    NewPromiseCapability: string;
    NextJob: string;
    ObjectDefineProperties: string;
    OrdinaryCallBindThis: string;
    OrdinaryCallEvaluateBody: string;
    OrdinaryCreateFromConstructor: string;
    OrdinaryDelete: string;
    OrdinaryGet: string;
    OrdinaryIsExtensible: string;
    OrdinaryOwnPropertyKeys: string;
    OrdinaryPreventExtensions: string;
    OrdinarySet: string;
    ParseModule: string;
    ParseScript: string;
    PerformEval: string;
    PerformPromiseAll: string;
    PerformPromiseRace: string;
    PerformPromiseThen: string;
    PrepareForOrdinaryCall: string;
    PrepareForTailCall: string;
    PromiseReactionJob: string;
    PromiseResolveThenableJob: string;
    ProxyCreate: string;
    PutValue: string;
    QuoteJSONString: string;
    RegExpAlloc: string;
    RegExpCreate: string;
    RegExpInitialize: string;
    RejectPromise: string;
    RepeatMatcher: string;
    ResolveBinding: string;
    ResolveThisBinding: string;
    ReturnIfAbrupt: string;
    ScriptEvaluation: string;
    ScriptEvaluationJob: string;
    SerializeJSONArray: string;
    SerializeJSONObject: string;
    SerializeJSONProperty: string;
    SetDefaultGlobalBindings: string;
    SetRealmGlobalObject: string;
    SetValueInBuffer: string;
    SetViewValue: string;
    SortCompare: string;
    SplitMatch: string;
    StringCreate: string;
    TopLevelModuleEvaluationJob: string;
    'ToString Applied to the Number Type': string;
    TriggerPromiseReactions: string;
    TypedArrayCreate: string;
    TypedArraySpeciesCreate: string;
    UpdateEmpty: string;
    UTC: string;
    UTF16Decode: string;
    UTF16Encoding: string;
    ValidateTypedArray: string;
}

declare const ES2016Operations: ES2016Operations;
export = ES2016Operations;
