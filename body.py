import streamlit as st

def Pagina_Inicial():
    body_html = """
    <div class = "body">
        <div class = "body-left">
            <h1 class = "body-title">Bem-vindo ao Solutech!</h1>
            <p class = "body-text">A Solutech é uma empresa de tecnologia
            especializada em soluções inovadoras para o mercado digital. Nosso objetivo é fornecer produtos e serviços de alta qualidade que atendam às necessidades dos nossos clientes.</p>
            <p class = "body-text">Explore nosso site para saber mais sobre nossos serviços, equipe e projetos. Estamos sempre prontos para ajudá-lo a alcançar seus objetivos de negócios com tecnologia de ponta.</p>
        </div>
        <div class = "body-right">
            <img src = "icones/logo_falsa.jpeg" class = "body-image">
        </div>
    </div>
    """
    st.markdown(body_html, unsafe_allow_html=True)

def sobre():