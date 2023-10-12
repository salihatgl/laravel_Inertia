import { Head } from '@inertiajs/vue3';
import Layout from './User/Layout.vue';

export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
createInertiaApp({
title: title => `${title} - My App`,
// ...
});
const __VLS_props = defineProps({ user: Object });

const __VLS_componentsOption = {};

let __VLS_name!: 'welcome';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'Layout', typeof __VLS_localComponents, "Layout", "Layout", "Layout"> &
__VLS_WithComponent<'Head', typeof __VLS_localComponents, "Head", "Head", "Head">;
__VLS_components.Layout; __VLS_components.Layout;
// @ts-ignore
[Layout, Layout,];
__VLS_components.Head;
// @ts-ignore
[Head,];
({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).ul; ({} as __VLS_IntrinsicElements).ul;
({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).h1; ({} as __VLS_IntrinsicElements).h1;
({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p;
{
let __VLS_0!: 'Layout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Layout : (typeof __VLS_resolvedLocalAndGlobalComponents)['Layout'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, }));
({} as { Layout: typeof __VLS_0; }).Layout;
({} as { Layout: typeof __VLS_0; }).Layout;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
let __VLS_5!: 'Head' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Head : (typeof __VLS_resolvedLocalAndGlobalComponents)['Head'];
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, title: ("Your page title"), }));
({} as { Head: typeof __VLS_5; }).Head;
const __VLS_7 = __VLS_6({ ...{}, title: ("Your page title"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, title: ("Your page title"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
{
const __VLS_10 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_3.slots!).header;
{
const __VLS_13 = ({} as __VLS_IntrinsicElements)["ul"];
const __VLS_14 = __VLS_elementAsFunctionalComponent(__VLS_13);
({} as __VLS_IntrinsicElements).ul;
({} as __VLS_IntrinsicElements).ul;
const __VLS_15 = __VLS_14({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_13, typeof __VLS_15> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15)!;
let __VLS_17!: __VLS_NormalizeEmits<typeof __VLS_16.emit>;
{
const __VLS_18 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_19 = __VLS_elementAsFunctionalComponent(__VLS_18);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_20 = __VLS_19({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_18, typeof __VLS_20> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20)!;
let __VLS_22!: __VLS_NormalizeEmits<typeof __VLS_21.emit>;
{
const __VLS_23 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_24 = __VLS_elementAsFunctionalComponent(__VLS_23);
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_25 = __VLS_24({ ...{}, style: ({}), class: ("active"), href: ("#home"), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_23, typeof __VLS_25> & Record<string, unknown>) => void)({ ...{}, style: ({}), class: ("active"), href: ("#home"), });
const __VLS_26 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25)!;
let __VLS_27!: __VLS_NormalizeEmits<typeof __VLS_26.emit>;
(__VLS_26.slots!).default;
}
(__VLS_21.slots!).default;
}
{
const __VLS_28 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_29 = __VLS_elementAsFunctionalComponent(__VLS_28);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_30 = __VLS_29({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_28, typeof __VLS_30> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
let __VLS_32!: __VLS_NormalizeEmits<typeof __VLS_31.emit>;
{
const __VLS_33 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_34 = __VLS_elementAsFunctionalComponent(__VLS_33);
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_35 = __VLS_34({ ...{}, style: ({}), href: ("#news"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_33, typeof __VLS_35> & Record<string, unknown>) => void)({ ...{}, style: ({}), href: ("#news"), });
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
let __VLS_37!: __VLS_NormalizeEmits<typeof __VLS_36.emit>;
(__VLS_36.slots!).default;
}
(__VLS_31.slots!).default;
}
{
const __VLS_38 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_39 = __VLS_elementAsFunctionalComponent(__VLS_38);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_40 = __VLS_39({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_38, typeof __VLS_40> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40)!;
let __VLS_42!: __VLS_NormalizeEmits<typeof __VLS_41.emit>;
{
const __VLS_43 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_44 = __VLS_elementAsFunctionalComponent(__VLS_43);
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_45 = __VLS_44({ ...{}, style: ({}), href: ("#contact"), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_43, typeof __VLS_45> & Record<string, unknown>) => void)({ ...{}, style: ({}), href: ("#contact"), });
const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45)!;
let __VLS_47!: __VLS_NormalizeEmits<typeof __VLS_46.emit>;
(__VLS_46.slots!).default;
}
(__VLS_41.slots!).default;
}
{
const __VLS_48 = ({} as __VLS_IntrinsicElements)["li"];
const __VLS_49 = __VLS_elementAsFunctionalComponent(__VLS_48);
({} as __VLS_IntrinsicElements).li;
({} as __VLS_IntrinsicElements).li;
const __VLS_50 = __VLS_49({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_48, typeof __VLS_50> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50)!;
let __VLS_52!: __VLS_NormalizeEmits<typeof __VLS_51.emit>;
{
const __VLS_53 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_54 = __VLS_elementAsFunctionalComponent(__VLS_53);
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_55 = __VLS_54({ ...{}, style: ({}), href: ("#about"), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_53, typeof __VLS_55> & Record<string, unknown>) => void)({ ...{}, style: ({}), href: ("#about"), });
const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55)!;
let __VLS_57!: __VLS_NormalizeEmits<typeof __VLS_56.emit>;
(__VLS_56.slots!).default;
}
(__VLS_51.slots!).default;
}
(__VLS_16.slots!).default;
}
{
const __VLS_58 = ({} as __VLS_IntrinsicElements)["h1"];
const __VLS_59 = __VLS_elementAsFunctionalComponent(__VLS_58);
({} as __VLS_IntrinsicElements).h1;
({} as __VLS_IntrinsicElements).h1;
const __VLS_60 = __VLS_59({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_59));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_58, typeof __VLS_60> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60)!;
let __VLS_62!: __VLS_NormalizeEmits<typeof __VLS_61.emit>;
(__VLS_61.slots!).default;
}
}
}
{
const __VLS_63 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_64 = __VLS_elementAsFunctionalComponent(__VLS_63);
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_65 = __VLS_64({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_64));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_63, typeof __VLS_65> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_3.slots!).footer;
{
const __VLS_66 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_68 = __VLS_67({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
(__VLS_ctx.user.name);
(__VLS_69.slots!).default;
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[user,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
layout: (h, page) => h(Layout, [page]),
layout: Layout,
setup() {
return {
$props: __VLS_makeOptional(__VLS_props),
...__VLS_props,
Head: Head as typeof Head,
Layout: Layout as typeof Layout,
};
},
});
return (await import('vue')).defineComponent({
layout: (h, page) => h(Layout, [page]),
layout: Layout,
setup() {
return {
$props: __VLS_makeOptional(__VLS_props),
...__VLS_props,
};
},
});
})();
