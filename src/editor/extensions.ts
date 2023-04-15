import { autocompletion } from '@codemirror/autocomplete';
import { EditorView } from '@codemirror/view'
import { CompletionsType, FunctionType, HintPathType, PlaceholderThemesType } from './interface';
import { baseTheme } from './plugin/base-theme';
import { customCompletions } from './plugin/custom-completions';
// export const extensions