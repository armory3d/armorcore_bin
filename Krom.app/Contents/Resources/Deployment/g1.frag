#version 330

uniform sampler2D tex;

out vec4 FragColor;
in vec2 texCoord;

void main()
{
    FragColor = texture(tex, texCoord);
}

