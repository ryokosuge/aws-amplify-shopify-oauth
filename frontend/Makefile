install:
	yarn
	@make shopify/login
	@make shopify/connect
	@make shopify/serve

dev:
	yarn dev

build:
	yarn build

shopify/login:
	@shopify login

shopify/connect:
	@shopify app connect

shopify/serve:
	@shopify app serve
