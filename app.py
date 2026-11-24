import streamlit as st
import streamlit.components.v1 as components
from pathlib import Path

st.set_page_config(page_title="Hibiscus Tea", page_icon="🌺", layout="wide",
                   initial_sidebar_state="collapsed")

# Streamlit ka default header/footer/padding hata do taake website full screen lage
st.markdown("""
<style>
#MainMenu, header, footer {visibility: hidden;}
.block-container {padding: 0 !important; max-width: 100% !important;}
iframe {border: 0;}
</style>
""", unsafe_allow_html=True)

base = Path(__file__).parent
html = (base / "index.html").read_text(encoding="utf-8")
css = (base / "style.css").read_text(encoding="utf-8")
js = (base / "script.js").read_text(encoding="utf-8")

# Streamlit sirf ek HTML string embed karta hai, isliye CSS aur JS inline kar rahe hain
html = html.replace('<link rel="stylesheet" href="style.css">', f"<style>{css}</style>")
html = html.replace('<script src="script.js"></script>', f"<script>{js}</script>")

components.html(html, height=950, scrolling=True)
