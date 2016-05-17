// normal.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;

const float SHIFT = 0.001;
const float HEIGHT = 0.25;

vec3 getPos(vec2 uv) {
	float d = texture2D(texture, uv).r * HEIGHT;
	return vec3(uv.x, d, uv.y);
}

void main(void) {
	vec3 posCurr = getPos(vTextureCoord);
	vec3 posRight = getPos(vTextureCoord + vec2(SHIFT, 0.0));
	vec3 posBottom = getPos(vTextureCoord + vec2(0.0, SHIFT));

	vec3 vRight = posRight - posCurr;
	vec3 vBottom = posBottom - posCurr;
	vec3 normal = normalize(cross(vBottom, vRight));

    gl_FragColor = vec4(normal, 1.0);
    // gl_FragColor = texture2D(texture, vTextureCoord);
}