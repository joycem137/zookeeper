# target is the final output file for your library
RELEASE_TARGET=fedcom.js

HTML_DIR = html
INDEX_HTML = index.html
TEST_HTML = test.html

BUILD_LOG = build.log

# find, in the 'src' directory, all the files with a name ending in .js
SRC_FILES=$(shell find js -type f -name "*.js")

BUILD_OPTIONS=build/build.js
RJS=node_modules/.bin/r.js

OUTPUT_DIR=web

all: debug dev test

dev: copyDevHtml

test: copyTestHtml

debug: $(RJS) $(SRC_FILES) copyReleaseHtml
	@$(RJS) -o $(BUILD_OPTIONS) optimize=none out=$(OUTPUT_DIR)/$(RELEASE_TARGET) > $(BUILD_LOG)

release: $(RJS) $(SRC_FILES) copyReleaseHtml
	@$(RJS) -o $(BUILD_OPTIONS) out=$(OUTPUT_DIR)/$(RELEASE_TARGET) > $(BUILD_LOG)

clean:
	@rm -rf web
	@rm -f $(BUILD_LOG)
	@rm -f $(INDEX_HTML)
	@rm -f $(TEST_HTML)
	@rm -f $(RELEASE_TARGET)

$(RJS):
	@npm install

$(OUTPUT_DIR):
	@mkdir -p $(OUTPUT_DIR)

copyReleaseHtml: $(OUTPUT_DIR)
	@cp $(HTML_DIR)/$(INDEX_HTML) $(OUTPUT_DIR)
	@cp -rf img $(OUTPUT_DIR)
	@cp -rf audio $(OUTPUT_DIR)
	@cp -rf stylesheets $(OUTPUT_DIR)

copyDevHtml:
	@cp $(HTML_DIR)/$(INDEX_HTML) .
	@cp js/lib/require-2.1.11.min.js $(RELEASE_TARGET)

copyTestHtml:
	@cp $(HTML_DIR)/$(TEST_HTML) .

bootstrap: $(OUTPUT_DIR)
	@cp js/lib/require-2.1.11.min.js $(OUTPUT_DIR)/$(RELEASE_TARGET)

