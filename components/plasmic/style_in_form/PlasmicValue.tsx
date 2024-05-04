// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nhXBd3CNNLYZW2Pj52bSRa
// Component: 5rQQUKGyn2p9

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

import Button from "../../Button"; // plasmic-import: cLLEHB2WpU1a/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: nhXBd3CNNLYZW2Pj52bSRa/projectcss
import sty from "./PlasmicValue.module.css"; // plasmic-import: 5rQQUKGyn2p9/css

import TakeOffIcon from "./icons/PlasmicIcon__TakeOff"; // plasmic-import: 1afAZOy9Y7i7/icon
import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: o0fHIWJcK2eJ/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: _tWcHAQiOGu3/icon

createPlasmicElementProxy;

export type PlasmicValue__VariantMembers = {
  topBottom: "topBottom";
  center: "center";
  withButton: "withButton";
};
export type PlasmicValue__VariantsArgs = {
  topBottom?: SingleBooleanChoiceArg<"topBottom">;
  center?: SingleBooleanChoiceArg<"center">;
  withButton?: SingleBooleanChoiceArg<"withButton">;
};
type VariantPropType = keyof PlasmicValue__VariantsArgs;
export const PlasmicValue__VariantProps = new Array<VariantPropType>(
  "topBottom",
  "center",
  "withButton"
);

export type PlasmicValue__ArgsType = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  children2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicValue__ArgsType;
export const PlasmicValue__ArgProps = new Array<ArgPropType>(
  "children",
  "icon",
  "children2"
);

export type PlasmicValue__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultValueProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  children2?: React.ReactNode;
  topBottom?: SingleBooleanChoiceArg<"topBottom">;
  center?: SingleBooleanChoiceArg<"center">;
  withButton?: SingleBooleanChoiceArg<"withButton">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicValue__RenderFunc(props: {
  variants: PlasmicValue__VariantsArgs;
  args: PlasmicValue__ArgsType;
  overrides: PlasmicValue__OverridesType;
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

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "topBottom",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.topBottom
      },
      {
        path: "center",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.center
      },
      {
        path: "withButton",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withButton
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootcenter]: hasVariant($state, "center", "center"),
          [sty.roottopBottom]: hasVariant($state, "topBottom", "topBottom"),
          [sty.rootwithButton]: hasVariant($state, "withButton", "withButton")
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox___0Avts, {
          [sty.freeBoxcenter___0AvtsKM0Y]: hasVariant(
            $state,
            "center",
            "center"
          ),
          [sty.freeBoxtopBottom___0Avts64NYo]: hasVariant(
            $state,
            "topBottom",
            "topBottom"
          )
        })}
      >
        <div className={classNames(projectcss.all, sty.freeBox___2GOfb)}>
          {renderPlasmicSlot({
            defaultContents: (
              <TakeOffIcon
                className={classNames(projectcss.all, sty.svg__ygq4H)}
                role={"img"}
              />
            ),

            value: args.icon
          })}
        </div>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__pyVdO, {
          [sty.freeBoxcenter__pyVdOkM0Y]: hasVariant(
            $state,
            "center",
            "center"
          ),
          [sty.freeBoxwithButton__pyVdObGqbo]: hasVariant(
            $state,
            "withButton",
            "withButton"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tVrWs
                )}
              >
                {"Worldwide Shipping"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___1YspL
                )}
              >
                {"Special financing and earn rewards."}
              </div>
            </React.Fragment>
          ),
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrencenter]: hasVariant(
              $state,
              "center",
              "center"
            )
          })
        })}
      </Stack__>
      {(hasVariant($state, "withButton", "withButton") ? true : false) ? (
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__uiFHf, {
            [sty.freeBoxcenter__uiFHfKM0Y]: hasVariant(
              $state,
              "center",
              "center"
            ),
            [sty.freeBoxwithButton__uiFHfbGqbo]: hasVariant(
              $state,
              "withButton",
              "withButton"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <Button
                className={classNames("__wab_instance", sty.button__cvtJ6, {
                  [sty.buttonwithButton__cvtJ6BGqbo]: hasVariant(
                    $state,
                    "withButton",
                    "withButton"
                  )
                })}
                colors={"black"}
                endIcon={
                  <RightArrowIcon
                    className={classNames(projectcss.all, sty.svg__iSoKf)}
                    role={"img"}
                  />
                }
                rounded={true}
                size={"large"}
                submitsForm={true}
              >
                {"Read our letter"}
              </Button>
            ),
            value: args.children2,
            className: classNames(sty.slotTargetChildren2, {
              [sty.slotTargetChildren2center]: hasVariant(
                $state,
                "center",
                "center"
              ),
              [sty.slotTargetChildren2withButton]: hasVariant(
                $state,
                "withButton",
                "withButton"
              )
            })
          })}
        </Stack__>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValue__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValue__VariantsArgs;
    args?: PlasmicValue__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicValue__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicValue__ArgsType,
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
          internalArgPropNames: PlasmicValue__ArgProps,
          internalVariantPropNames: PlasmicValue__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicValue__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValue";
  } else {
    func.displayName = `PlasmicValue.${nodeName}`;
  }
  return func;
}

export const PlasmicValue = Object.assign(
  // Top-level PlasmicValue renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicValue
    internalVariantProps: PlasmicValue__VariantProps,
    internalArgProps: PlasmicValue__ArgProps
  }
);

export default PlasmicValue;
/* prettier-ignore-end */
