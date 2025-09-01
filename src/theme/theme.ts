import { StyleSheet } from "react-native";

export const globalColors = {
    primary:'#37353E',
    secondary: '#715A5A',
    tertiary: '#44444E',
    success: '#D3DAD9',
    warning: '#E9C46A',
    danger: '#E76F51',
    light: '#F4F1DE',
    dark: '#1A1A1A',
    background: '#FFFFFF'

}
// globalStyles es un objeto que contiene estilos reutilizables para la aplicacion y se crea con StyleSheet de react-native
export const globalStyles = StyleSheet.create({
    // estilos para la vista principal de cada pantalla de la aplicacion reutilizables
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: globalColors.background
    },
    // estilos para el boton primario reutilizable
    PrimaryButton: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        width: '100%',
        alignItems: 'center',
    },
    // estilos para el texto del boton primario reutilizable
    ButtonText: {
        color: globalColors.light,
        fontSize: 18,
    }
    // estilos para el titulo de cada pantalla reutilizable
    ,title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: globalColors.primary,
    }

})