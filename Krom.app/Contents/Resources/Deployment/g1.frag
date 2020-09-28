#version 330
#ifdef GL_ARB_shading_language_420pack
#extension GL_ARB_shading_language_420pack : require
#endif

layout(binding = 0) uniform sampler2D tex;

out vec4 FragColor;
in vec2 texCoord;

void main()
{
    FragColor = texture(tex, texCoord);
}

