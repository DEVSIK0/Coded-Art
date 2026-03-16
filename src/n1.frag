void mainImage( out vec4 O, vec2 I )
{
    float z, d, i;
    for( O *= i; i++ < 2e1; )
    {
        vec3 p = z * normalize( vec3( I + I, 0 ) - iResolution.xyx ) + .1;
        p = vec3( atan( p.y / .2, p.x ) * 2., p.z / 3., length( p.xy ) - 5. - z * .2 );
        for( d = 0.; d++ < 7.; ) 
        {
            p += sin( p.yzx * d + iTime + .3 * i ) / d;
        }
        z += d = length( vec4( .4 * cos( p ) - .4, p.z ) );
        O += ( 1. + cos( p.x + i * .4 + z + vec4( 6, 1, 2, 0 ) ) ) / d;
    }
    O = tanh( O * O / 4e2 );
}