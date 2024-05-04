// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nhXBd3CNNLYZW2Pj52bSRa
// Component: pzrz1M_rNEz1

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import TextInput from "../../TextInput"; // plasmic-import: 7A4l86Ik0gUC/component
import Button from "../../Button"; // plasmic-import: cLLEHB2WpU1a/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: nhXBd3CNNLYZW2Pj52bSRa/projectcss
import sty from "./PlasmicSignUp.module.css"; // plasmic-import: pzrz1M_rNEz1/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: QjFjAPwvQxtS/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Owi0DGKAUPrN/icon
import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: o0fHIWJcK2eJ/icon

createPlasmicElementProxy;

export type PlasmicSignUp__VariantMembers = {};
export type PlasmicSignUp__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignUp__VariantsArgs;
export const PlasmicSignUp__VariantProps = new Array<VariantPropType>();

export type PlasmicSignUp__ArgsType = {};
type ArgPropType = keyof PlasmicSignUp__ArgsType;
export const PlasmicSignUp__ArgProps = new Array<ArgPropType>();

export type PlasmicSignUp__OverridesType = {
  root?: Flex__<"div">;
  h3?: Flex__<"h3">;
  form?: Flex__<typeof FormWrapper>;
  textInput2?: Flex__<typeof TextInput>;
  textInput5?: Flex__<typeof TextInput>;
  textInput6?: Flex__<typeof TextInput>;
  textInput7?: Flex__<typeof TextInput>;
  button?: Flex__<typeof Button>;
};

export interface DefaultSignUpProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSignUp__RenderFunc(props: {
  variants: PlasmicSignUp__VariantsArgs;
  args: PlasmicSignUp__ArgsType;
  overrides: PlasmicSignUp__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const $globalActions = useGlobalActions?.();

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      },
      {
        path: "textInput5.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput6.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput7.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__cRHfV)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___8D1Vt)}
            >
              <h3
                data-plasmic-name={"h3"}
                data-plasmic-override={overrides.h3}
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3
                )}
              >
                {"Welcome to Style in Form"}
              </h3>
              {(() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.form),
                  colon: false,
                  extendedOnValuesChange:
                    generateStateOnChangePropForCodeComponents(
                      $state,
                      "value",
                      ["form", "value"],
                      FormWrapper_Helpers
                    ),
                  formItems: [
                    { label: "Name", name: "name", inputType: "Text" },
                    {
                      label: "Message",
                      name: "message",
                      inputType: "Text Area"
                    }
                  ],
                  labelCol: (() => {
                    const __composite = { span: null, horizontalOnly: true };
                    __composite["span"] = 4;
                    return __composite;
                  })(),
                  layout: "horizontal",
                  mode: "advanced",
                  onFinish: async values => {
                    const $steps = {};

                    $steps["invokeGlobalAction"] = true
                      ? (() => {
                          const actionArgs = {
                            args: [
                              (() => {
                                try {
                                  return $state.form.value;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()
                            ]
                          };
                          return $globalActions[
                            "medusa-provider.signUp"
                          ]?.apply(null, [...actionArgs.args]);
                        })()
                      : undefined;
                    if (
                      $steps["invokeGlobalAction"] != null &&
                      typeof $steps["invokeGlobalAction"] === "object" &&
                      typeof $steps["invokeGlobalAction"].then === "function"
                    ) {
                      $steps["invokeGlobalAction"] = await $steps[
                        "invokeGlobalAction"
                      ];
                    }

                    $steps["goToHomepage"] = true
                      ? (() => {
                          const actionArgs = { destination: `/` };
                          return (({ destination }) => {
                            if (
                              typeof destination === "string" &&
                              destination.startsWith("#")
                            ) {
                              document
                                .getElementById(destination.substr(1))
                                .scrollIntoView({ behavior: "smooth" });
                            } else {
                              __nextRouter?.push(destination);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["goToHomepage"] != null &&
                      typeof $steps["goToHomepage"] === "object" &&
                      typeof $steps["goToHomepage"].then === "function"
                    ) {
                      $steps["goToHomepage"] = await $steps["goToHomepage"];
                    }
                  },
                  onIsSubmittingChange:
                    generateStateOnChangePropForCodeComponents(
                      $state,
                      "isSubmitting",
                      ["form", "isSubmitting"],
                      FormWrapper_Helpers
                    ),
                  ref: ref => {
                    $refs["form"] = ref;
                  },
                  submitSlot: null,
                  wrapperCol: (() => {
                    const __composite = { span: null, horizontalOnly: true };
                    __composite["span"] = 20;
                    return __composite;
                  })()
                };
                initializeCodeComponentStates(
                  $state,
                  [
                    {
                      name: "value",
                      plasmicStateName: "form.value"
                    },
                    {
                      name: "isSubmitting",
                      plasmicStateName: "form.isSubmitting"
                    }
                  ],
                  [],
                  FormWrapper_Helpers ?? {},
                  child$Props
                );

                return (
                  <FormWrapper
                    data-plasmic-name={"form"}
                    data-plasmic-override={overrides.form}
                    {...child$Props}
                  >
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__cpxn
                      )}
                      label={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__m2Oc
                          )}
                        >
                          {"First Name"}
                        </div>
                      }
                      name={"firstName"}
                    >
                      <TextInput
                        data-plasmic-name={"textInput2"}
                        data-plasmic-override={overrides.textInput2}
                        className={classNames("__wab_instance", sty.textInput2)}
                        onChange={(...eventArgs) => {
                          generateStateOnChangeProp($state, [
                            "textInput2",
                            "value"
                          ])((e => e.target?.value).apply(null, eventArgs));
                        }}
                        placeholder={``}
                        value={
                          generateStateValueProp($state, [
                            "textInput2",
                            "value"
                          ]) ?? ""
                        }
                      />
                    </FormItemWrapper>
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField___9KxrW
                      )}
                      label={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__oLihl
                          )}
                        >
                          {"Last Name"}
                        </div>
                      }
                      name={"lastName"}
                    >
                      <TextInput
                        data-plasmic-name={"textInput5"}
                        data-plasmic-override={overrides.textInput5}
                        className={classNames("__wab_instance", sty.textInput5)}
                        onChange={(...eventArgs) => {
                          generateStateOnChangeProp($state, [
                            "textInput5",
                            "value"
                          ])((e => e.target?.value).apply(null, eventArgs));
                        }}
                        placeholder={``}
                        value={
                          generateStateValueProp($state, [
                            "textInput5",
                            "value"
                          ]) ?? ""
                        }
                      />
                    </FormItemWrapper>
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__axLNv
                      )}
                      label={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__pubZu
                          )}
                        >
                          {"Email"}
                        </div>
                      }
                      name={"email"}
                    >
                      <TextInput
                        data-plasmic-name={"textInput6"}
                        data-plasmic-override={overrides.textInput6}
                        className={classNames("__wab_instance", sty.textInput6)}
                        onChange={(...eventArgs) => {
                          generateStateOnChangeProp($state, [
                            "textInput6",
                            "value"
                          ])((e => e.target?.value).apply(null, eventArgs));
                        }}
                        placeholder={``}
                        value={
                          generateStateValueProp($state, [
                            "textInput6",
                            "value"
                          ]) ?? ""
                        }
                      />
                    </FormItemWrapper>
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__lZuiM
                      )}
                      label={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__vlIgK
                          )}
                        >
                          {"Password"}
                        </div>
                      }
                      name={"password"}
                    >
                      <TextInput
                        data-plasmic-name={"textInput7"}
                        data-plasmic-override={overrides.textInput7}
                        className={classNames("__wab_instance", sty.textInput7)}
                        onChange={(...eventArgs) => {
                          generateStateOnChangeProp($state, [
                            "textInput7",
                            "value"
                          ])((e => e.target?.value).apply(null, eventArgs));
                        }}
                        placeholder={``}
                        type={"password"}
                        value={
                          generateStateValueProp($state, [
                            "textInput7",
                            "value"
                          ]) ?? ""
                        }
                      />
                    </FormItemWrapper>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ymtI4)}
                    >
                      <Button
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        className={classNames("__wab_instance", sty.button)}
                        colors={"black"}
                        submitsForm={true}
                      >
                        {"Sign Up"}
                      </Button>
                    </div>
                  </FormWrapper>
                );
              })()}
            </Stack__>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "h3",
    "form",
    "textInput2",
    "textInput5",
    "textInput6",
    "textInput7",
    "button"
  ],
  h3: ["h3"],
  form: [
    "form",
    "textInput2",
    "textInput5",
    "textInput6",
    "textInput7",
    "button"
  ],
  textInput2: ["textInput2"],
  textInput5: ["textInput5"],
  textInput6: ["textInput6"],
  textInput7: ["textInput7"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h3: "h3";
  form: typeof FormWrapper;
  textInput2: typeof TextInput;
  textInput5: typeof TextInput;
  textInput6: typeof TextInput;
  textInput7: typeof TextInput;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignUp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignUp__VariantsArgs;
    args?: PlasmicSignUp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignUp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSignUp__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSignUp__ArgProps,
          internalVariantPropNames: PlasmicSignUp__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSignUp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUp";
  } else {
    func.displayName = `PlasmicSignUp.${nodeName}`;
  }
  return func;
}

export const PlasmicSignUp = Object.assign(
  // Top-level PlasmicSignUp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    form: makeNodeComponent("form"),
    textInput2: makeNodeComponent("textInput2"),
    textInput5: makeNodeComponent("textInput5"),
    textInput6: makeNodeComponent("textInput6"),
    textInput7: makeNodeComponent("textInput7"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicSignUp
    internalVariantProps: PlasmicSignUp__VariantProps,
    internalArgProps: PlasmicSignUp__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSignUp;
/* prettier-ignore-end */
