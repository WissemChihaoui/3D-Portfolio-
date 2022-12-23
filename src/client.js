import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'wrnar36i',
    dataset: 'production',
    apiVersion:'2022-02-01',
    useCdn: true,
    token: 'skhFIrAIvTqJgmSg6M3IkC3v7Ha1okR8j7XCcUoVw57eGGmZj00SuMX4NlThlsUwkqTkQ2KbnhgvkLXAWKjsA0tubvK8SjgGH8k4eeT6NcYNrsBwN2L5cgxUrJgoPJC34GpioWUEu7C8Zf3v9DMntxUnXzfpQNPX58BNtu5Csqzf3h0JQEKU',
    ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);