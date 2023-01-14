FROM pandoc/latex:latest
RUN \
 apk --no-cache add \
  texlive-full \
  texmf-dist-pictures \
  texmf-dist-latexextra \
  poppler-utils &&\
texhash &&\
tlmgr update --self &&\
tlmgr install \
  pgf
