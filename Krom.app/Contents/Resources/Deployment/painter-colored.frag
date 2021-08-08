#version 330

out vec4 FragColor;
in vec4 fragmentColor;

void main()
{
    FragColor = fragmentColor;
}

