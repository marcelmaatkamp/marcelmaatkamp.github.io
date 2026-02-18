FROM pandoc/latex:latest
RUN \
 apk --no-cache add \
  texlive-full \
  texmf-dist-full \
  poppler-utils &&\
texhash &&\
tlmgr update --self &&\
tlmgr install \
  pgf \
  scheme-full
