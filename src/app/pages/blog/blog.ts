interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  likes: number;
  isLiked: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'light-natural',
    title: 'Light - Natural, Hard and Soft Light',
    date: 'October 25, 2026',
    content: `Photography is light - it is the very essence of how we create photographs
Travels in straight lines
Has intensity, affecting brightness and contrast

Light can be:
Reflected
Refracted
Absorbed
Transmitted

Natural light
Natural light comes from such a distance that its beam passes through and bounces off infinite surfaces around us.
Depending on the time of day, the season and atmospheric conditions, the sun assumes a range of contrasts, intensities and colours
From the sun, moon, fire, etc. constantly changing in colour and intensity (time of day, weather)
Animals also create their own light - fireflies and jellyfish - called bioluminescence

Artificial light
Created by humans
Predictable, portable and malleable
E.g. Lamps, fluorescent lights, flashes, torches, street lights, disco lights

Hard light vs soft light

Hard light
Direct, strong, high contrast
Creates sharp, dark shadows
Examples: direct sunlight, bare lightbulb, spotlight, overhead fluorescent lights, direct flash
Soft light
Low contrast, gentle shadows
Flattering for portraits
Diffused
Examples: cloudy day, a light with a shade, sunlight through a diffuser, indirect light, sunset/sunrise (golden hour), open shade

Using Light Creatively
Light can reveal, hide, and create mood
Shadows can add depth and storytelling
Positioning subjects (front-lit, backlit, shaded) changes the image dramatically
Golden Hour
Occurs shortly after sunrise and before sunset
Produces warm, soft, directional light with long shadows
Colour & White Balance
Light has different colour temperatures (e.g., blue daylight, yellow tungsten)
Cameras adjust this via white balance, but photographers can manipulate it creatively
Tools to Control Light
Filters:
UV (protection)Polarising
Polarising (reduce reflections)
Graduated ND (balance bright/dark areas)
Reflectors & diffusers:
Reflect light into shadows
Soften harsh light
Can be improvised (e.g., white card, fabric, baking paper)`,
    imageUrl: '',
    imageAlt: '',
    likes: 12,
    isLiked: false
  },
  {
    id: 'composition',
    title: 'Composition',
    date: 'October 20, 2026',
    content: `Composition is the manner in which you place objects within your frame which aid you to tell your story. This means how you display the elements to best move the viewer's eye around the frame.
we use composition to order music, arrange our home, and emphasise elements in our art. Composition in photography is no difference to this, except that we tend to think of photographic composition as the way the photographer places the elements so as to move the viewer's eye around the frame. It is also the way we move ourselves physically as photographers to engage with what we want in or out of the frame and where it's positioned.

Compositional Elements & Techniques
Composition is the way that you arrange the elements within the frame and how that supports the core idea of your work. There are a number of different techniques that can be used to engage viewers:

Leading Lines
Pave the way for the eye to flow through the different elements of the frame
It’s important for them to bring you into the frame and not out
Uses existing lines (pavements, waterways, or even a subject's gaze) to draw the eye toward the subject.

Negative Space
Utilizing empty areas, shadows, or contrast to highlight the main subject and create a specific emotional effect

Framing
Using environmental elements like doorways, windows, or "filling the frame" with the subject to eliminate distractionsUtilising

Colours
Colours bring their own emotions to photographs
Controlling hue, value, saturation, and colour relationships, can guide viewer attention and evoke emotions

Rule of Thirds
Also known as the golden rule
Evenly dividing the frame horizontally and vertically into an equal 3 times 3 grid and placing the main subject at the intersections or along the line itself for a dynamic feel
Like leading lines, it helps to lead us across the frame

Golden Triangle
Splitting the frame into three triangles with the same angles, ideal for photos with strong diagonal elements

Contrast
Utilising differences in light/dark or complementary colours to move the eye

Patterns
Repeating lines, shapes, or colors to act as a main focus or a compositional guide

Golden Mean/Fibonacci
Based on the Fibonacci ratio (1:1.618), this creates a natural, balanced flow often found in nature
Creates a spiral and allows the viewers eyes to be lead around the image in a natural flow
Also called natures numbers because it appears frequently in nature

Balance & Symmetry
Formal balance involves equal weighting on both sides (symmetry), while conceptual balance matches different themes or tones within the frame

Texture
Showing the physical quality of an object to make a 2D image feel 3D

Depth of Field
Also known as point of focus
Using a wide aperture (e.g., f/4 or lower) to blur the background/foreground, thereby forcing focus onto the subject`,
    imageUrl: '',
    imageAlt: '',
    likes: 8,
    isLiked: false
  },
  {
    id: 'exposure-triangle',
    title: 'The Exposure Triangle',
    date: 'October 10, 2026',
    content: `The exposure triangle is the most important technical concept in photography because it controls how an image is captured and how it looks
Light enters the camera through the lens and aperture, and a shutter opens to expose the sensor, where the image is recorded digitally

The Three Parts of the Exposure Triangle
Aperture – controls the amount of light entering the camera
Sutter Speed – controls the duration of time the light enters the camera
ISO – controls the sensitivity of the camera sensor to light

Exposure Triangle
The exposure triangle consists of aperture, shutter speed, and ISO, which work together to control the brightness (exposure) of a photo. If one setting changes, one or both of the others must change to keep the exposure balanced.

Stops of Light
A stop means doubling or halving the amount of light in an image
+1 stop → doubles the light (brighter image)
–1 stop → halves the light (darker image)
Stops can be adjusted using aperture, shutter speed, or ISO
Aperture
aperture is the opening in the lens that lets light in
Large opening (small f-number, e.g., f/2.8) → more light
Small opening (large f-number, e.g., f/16) → less light
Changing aperture by one stop doubles or halves the light entering the camera

Shutter Speed
Shutter speed is how long the camera sensor is exposed to light
Slower shutter speed (longer time open) → more light
Faster shutter shutter speed (shorter time open) → less light

ISO
ISO controls the sensor’s sensitivity to light
Higher ISO → more sensitive → brighter image
Lower ISO → less sensitive → darker image
Doubling ISO increases exposure by one stop


How They Work Together
Many combinations of aperture, shutter speed, and ISO can produce the same exposure. If one setting changes, the others must be adjusted by the same number of stops in the opposite direction.

Getting Correct Exposure
When taking a photo, you must decide what is most important in the image first (for example freezing motion or creating background blur).
That choice determines which exposure setting you start with.

Starting points for settings:
ISO depends on lighting conditions:
Bright daylight → around ISO 100
Cloudy → around ISO 400
Indoors/darker → around ISO 800

Creative choices:
Fast shutter speed → freeze motion (sports, birds, water)
Wide aperture (low f-number) → shallow depth of field and blurred background
Small aperture (high f-number) → everything in focus (landscapes)
A common starting exposure if unsure is about ISO 100, f/5.6, and 1/125s, then adjust based on the camera meter

Adjusting exposure:
If the image is too bright → reduce light (smaller aperture or faster shutter speed)
If the image is too dark → increase light (wider aperture or slower shutter speed)
Sometimes scenes have very bright and dark areas, so photographers must decide what part of, the image to expose correctly (e.g. subject vs background)
It is usually better to avoid overexposing, because lost highlights cannot easily be recovered, while shadow details can often be restored, especially when shooting in RAW format

Bucket example:
Exposure can be compared to collecting rain in a bucket:
Shutter speed = how long the bucket is left in the rain
Aperture = how heavy the rain is (size of opening)
ISO = size/shape of the bucket (sensitivity)
Different combinations can still collect the same total amount of water (correct exposure)`,
    imageUrl: '',
    imageAlt: '',
    likes: 15,
    isLiked: false
  }
];