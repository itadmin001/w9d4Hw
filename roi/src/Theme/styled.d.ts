import 'styled-components'
import { Theme } from '@mui/material/StyleSheet'

declare module 'styled-components'{
    export interface DefaultTheme extends Theme {}
}