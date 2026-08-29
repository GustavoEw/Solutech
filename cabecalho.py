from turtle import st

import streamlit as str

class Cabecalho:
    def __init__(self):
        self.image="icones/logo_falsa.jpeg"
        self.menu = ["Home","Sobre", "Contato"]
        self.menu_selecionado = "Home"
        self.titulo = "solutech"

    def configurar_cabecalho(self):
        str.set_page_config(
            page_title=self.titulo,
            page_icon="🤖",
            layout="wide",
            initial_sidebar_state="expanded"
        )
        col1,colicon, coltitle,colmenu,col5 = str.columns([1,0.3, 2, 1, 1])   
     
        with colicon:
            str.image(self.image, width=100)
        with coltitle:
            str.title(self.titulo)
        with colmenu:
            self.menu_selecionado = str.selectbox("Menu", self.menu, index=self.menu.index(self.menu_selecionado))
     
            