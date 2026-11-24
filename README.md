# Hibiscus Tea Website

Registration-first multi-page website (HTML + CSS + JS) with a Streamlit wrapper.

## Files
- `index.html` : page structure
- `style.css`  : design and animations
- `script.js`  : pages, login/register, timer, customizer, profile settings
- `app.py`     : Streamlit entry point (embeds the website)
- `requirements.txt` : Streamlit dependency

## Run locally
    pip install -r requirements.txt
    streamlit run app.py

## Deploy on Streamlit Community Cloud
1. Push all files to the root of your GitHub repository.
2. Go to share.streamlit.io, click New app, choose the repo, branch `main`, main file `app.py`.
3. Deploy.

Note: login data is stored in the browser (localStorage). It is a demo, not a real database.
