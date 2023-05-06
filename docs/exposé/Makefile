PANDOC = pandoc
NAME = exposé
BIB = exposé.bib
CSL = acm.csl
FILTERS = pandoc-fignos

PANDOC_OPTS = $(NAME).md \
	--filter $(FILTERS) \
	--citeproc \
	--csl=$(CSL) \
	--bibliography=$(BIB)

$(NAME).pdf: $(NAME).md $(BIB) $(CSL)
	$(PANDOC) $(PANDOC_OPTS) \
		--pdf-engine=pdflatex \
		-o $(NAME).pdf

$(NAME).txt: $(NAME).md $(BIB) $(CSL)
	$(PANDOC) $(PANDOC_OPTS) \
		--to=plain \
		--wrap=none \
		-o $(NAME).txt

.PHONY: clean
clean:
	rm -f $(NAME).pdf $(NAME).txt
