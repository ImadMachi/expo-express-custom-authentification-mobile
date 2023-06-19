/***************************************************************/
/******************* Colors ************************************/
/***************************************************************/
export const COLORS = {
	slate50: "#F8FAFC",
	slate100: "#F1F5F9",
	slate200: "#E2E8F0",
	slate300: "#CBD5E1",
	slate400: "#94A3B8",
	slate500: "#64748B",
	slate600: "#475569",
	slate700: "#334155",
	slate800: "#1E293B",
	slate900: "#0F172A",
	slate950: "#020617",

	red50: "#FEF2F2",
	red100: "#FEE2E2",
	red200: "#FECACA",
	red300: "#FCA5A5",
	red400: "#F87171",
	red500: "#EF4444",
	red600: "#DC2626",
	red700: "#B91C1C",
	red800: "#991B1B",
	red900: "#7F1D1D",
	red950: "#450a0a",

	yellow50: "#FEFCE8",
	yellow100: "#FEF9C3",
	yellow200: "#FEF08A",
	yellow300: "#FDE047",
	yellow400: "#FACC15",
	yellow500: "#EAB308",
	yellow600: "#CA8A04",
	yellow700: "#A16207",
	yellow800: "#854D0E",
	yellow900: "#713F12",
	yellow950: "#422006",

	green50: "#F0FDF4",
	green100: "#DCFCE7",
	green200: "#BBF7D0",
	green300: "#86EFAC",
	green400: "#4ADE80",
	green500: "#22C55E",
	green600: "#16A34A",
	green700: "#15803D",
	green800: "#166534",
	green900: "#14532D",
	green950: "#052E16",

	blue50: "#F0F9FF",
	blue100: "#E0F2FE",
	blue200: "#BAE6FD",
	blue300: "#7DD3FC",
	blue400: "#38BDF8",
	blue500: "#0EA5E9",
	blue600: "#0284C7",
	blue700: "#0369A1",
	blue800: "#075985",
	blue900: "#0C4A6E",
	blue950: "#082F49",
};

// type ColorVariant = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
// type colorType = "slate" | "red" | "yellow" | "green" | "sky";

// export const getColor = (color: colorType, variant: ColorVariant): string | undefined => {
// 	const colorName = `${color}${variant}` as const;
// 	return typeof colors[colorName] !== "undefined" ? colors[colorName] : undefined;
// };

/***************************************************************/
/******************* Typography ********************************/
/***************************************************************/
export const light = "RobotoLight";
export const regular = "RobotoRegular";
export const medium = "RobotoMedium";
export const bold = "RobotoBold";
export const ligthItalic = "RobotoLightItalic";
export const regularItalic = "RobotoRegularItalic";
export const mediumItalic = "RobotoMediumItalic";
export const boldItalic = "RobotoBoldItalic";

export const textXs = 12;
export const textSm = 14;
export const textBase = 16;
export const textLg = 18;
export const textXl = 20;
export const text2xl = 24;
export const text3xl = 30;
export const text4xl = 36;

export const lineHeighXs = 16;
export const lineHeighSm = 18;
export const lineHeighBase = 20;
export const lineHeighLg = 22;
export const lineHeighXl = 24;
export const lineHeigh2xl = 30;
export const lineHeigh3xl = 36;
export const lineHeigh4xl = 42;

/***************************************************************/
/******************* Spacing ***********************************/
/***************************************************************/
export const SPACING = {
	xs: 4,
	sm: 8,
	base: 12,
	lg: 16,
	xl: 20,
	"2xl": 24,
	"3xl": 30,
	"4xl": 36,
	"5xl": 48,
	"6xl": 60,
	"7xl": 72,
	"8xl": 96,
	"9xl": 120,
	full: "100%",
	"1/2": "50%",
	"1/3": "33.333333%",
	"2/3": "66.666667%",
	"1/4": "25%",
	"2/4": "50%",
	"3/4": "75%",
};

/***************************************************************/
/******************* Border ************************************/
/***************************************************************/

export const RADIUS = {
	/** Small radius size */
	sm: 4,
	/** Medium radius size */
	md: 10,
	/** Large radius size */
	lg: 16,
};

/***************************************************************/
/******************* Shadow ************************************/
/***************************************************************/

export const SHADOW = {
	sm: {
		shadowColor: COLORS.slate300,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.05,
		shadowRadius: 1.0,
		elevation: 2,
	},
	md: {
		shadowColor: COLORS.slate300,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.05,
		shadowRadius: 4.0,
		elevation: 4,
	},
	lg: {
		shadowColor: COLORS.slate300,
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.05,
		shadowRadius: 10.0,
		elevation: 10,
	},
};
