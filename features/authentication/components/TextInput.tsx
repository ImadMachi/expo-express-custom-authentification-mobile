import { COLORS, SPACING } from "@constants/theme";
import { TextInput as NativeTextInput, StyleSheet, TextInputProps } from "react-native";

interface CustomTextInputProps extends TextInputProps {}

const TextInput = (props: CustomTextInputProps) => {
	return <NativeTextInput {...props} style={[props.style, styles.input]} />;
};

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: COLORS.slate200,
		borderRadius: 4,
		paddingVertical: SPACING.xs,
		paddingHorizontal: SPACING.md,
	},
});

export default TextInput;
