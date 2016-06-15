#version 330

in vec2 tex_coord;

uniform sampler2D u_texture;
uniform sampler2D u_splashTexture;

out vec4 out_Color;

void main(void) {
	vec4 c1 = texture(u_splashTexture, tex_coord);
	vec4 c2 = texture(u_texture, tex_coord);
	out_Color = mix(c2, c1, c1.a);
}