all: frontend/install

frontend/install:
	@make -C frontend install

frontend/dev:
	@make -C frontend dev

frontend/build:
	@make -C frontend build

frontend/start:
	@make -C frontend start

frontend/shopify/serve:
	@make -C frontend shopify/serve
