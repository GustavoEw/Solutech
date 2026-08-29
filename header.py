from turtle import st

import streamlit as str

class header:
    #Default constructor
    def __init__(self):
        #Default values pre-set
        self.image="icones/logo_falsa.jpeg"
        self.menu = ["Pagina_Inicial","Sobre", "Contato"]
        self.menu_selecionado = "Pagina_Inicial"
        self.titulo = "solutech"
    #config of the header for view
    def header_view(self):
        str.set_page_config(
            page_title=self.titulo,
            page_icon="🤖",
            layout="wide",
            initial_sidebar_state="expanded"
        )
        #define the header html
        header_html = """
        <div class = "header">
            <div class = "header-left">
                <img src = "{}" class = "header-logo">
            </div>
            <div class = "header-right">
                <ul class = "header-menu">
                    {}
                </ul>
            </div> 
        </div>
        """.format(self.image, "".join(["<li class = 'header-menu-item {}'>{}</li>".format("header-menu-item-selected" if item == self.menu_selecionado