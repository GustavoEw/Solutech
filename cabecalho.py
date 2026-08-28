import streamlit as str

class Cabecalho:
    def __init__(self):
        self.image="icones/logo.png"
        self.menu = ["Home","Sobre", "Contato"]
        self.menu_selecionado = "Home"
        self.titulo = "solutech"

    def configurar_cabecalho(self):
        str.set_page_config(
            page_title=self.titulo,
            page_icon=self.image,
            layout="wide",
            initial_sidebar_state="expanded"
        )
        col1, col2 = str.columns([1, 3])   
        col1.image(self.image, width=100)
        col2.title(self.titulo)
        col3.menu = str.selectbox("Menu", self.menu, index=self.menu.index(self.menu_selecionado))