import { defineConfig } from "orval";

export default defineConfig({
	api: {
		input: "http://localhost:3333/docs/json",
		output: {
			target: "./src/http/api.ts", // o arquivo gerado de forma automática
			client: "fetch",
			httpClient: "fetch",
			clean: true, // evita conflitos
			baseUrl: "http://localhost:3333", // url do backend

			override: {
				fetch: {
					includeHttpResponseReturnType: false, // o orval busca todas as responses, o false faz não retornar o status code de cada resposta
				},
			},
		},
	},
});
