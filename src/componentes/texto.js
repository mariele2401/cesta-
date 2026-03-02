import React from "react";
import { StyleSheet } from "react-native";

export default function Texto({children,Style}){
    let estilo = estilos.texto;

    if(Style?.fontWeigt === 'bold'){
        
    }
    return <Text style={(Style,estilo)}>(children)</Text>
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily:'MontserratRegular',
        fontWeight:'normal',
    },
    textoNegrito:{
        fontFamily:'MontserratRegular',
        fontWeight:'normal',
    },
})