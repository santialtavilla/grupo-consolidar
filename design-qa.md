# Design QA - Grupo Consolidar

## Comparison setup

- Source visual truth: `C:\Grupo Consolidar\tmp\proposals\Gestion-Transparente.png`
- Source pixels: 1487 x 1058
- Primary implementation screenshot: `C:\Grupo Consolidar\web\tmp\qa\implementation-1487x1058.png`
- Implementation pixels: 1487 x 1058
- CSS viewport: 1487 x 1058 at device scale factor 1
- State: landing page, initial desktop viewport, light theme
- Density normalization: none required; source and implementation were compared at identical pixel dimensions.
- Combined full-view evidence: `C:\Grupo Consolidar\web\tmp\qa\comparison-1487x1058.jpg`

## Full-view comparison evidence

The combined comparison confirms the selected direction is preserved: lightweight white header, centered institutional statement, generous white space, restrained aqua rules, panoramic residential imagery and a four-part trust strip. The implementation intentionally uses the exact logo extracted from the supplied PDF instead of the concept mockup's generated mark. It also uses Manrope rather than the mockup's serif display face, following the final brief's explicit brand direction. Required conversion copy and two functional hero actions were added without changing the calm editorial hierarchy.

## Focused region evidence

- Desktop hero: `C:\Grupo Consolidar\web\tmp\qa\desktop-1440.png`
- Tablet hero at 768 px: `C:\Grupo Consolidar\web\tmp\qa\tablet-768.png`
- Mobile hero at 375 px: `C:\Grupo Consolidar\web\tmp\qa\mobile-375.png`
- Services: `C:\Grupo Consolidar\web\tmp\qa\section-servicios.png`
- Transparency: `C:\Grupo Consolidar\web\tmp\qa\transparency-desktop.png`
- Professional support: `C:\Grupo Consolidar\web\tmp\qa\support-desktop.png`
- Contact close: `C:\Grupo Consolidar\web\tmp\qa\contact-desktop.png`
- FAQ open state: `C:\Grupo Consolidar\web\tmp\qa\mobile-faq-open.png`
- Mobile menu final state: `C:\Grupo Consolidar\web\tmp\qa\mobile-menu-final.png`

Focused comparisons were required because the source only shows the landing's opening composition, while the production brief adds responsive navigation, longer institutional sections and interactive states.

## Required fidelity surfaces

### Fonts and typography

Manrope is consistently applied at 400/500 for body and display copy and 600/700 for headings, labels and controls. The single H1 preserves the mock's oversized two-line hierarchy at desktop and becomes a readable three-line lockup at 375 px. Line height, letter spacing and wrapping remain stable at 375, 768, 1440 and the exact 1487 px source viewport. The use of sans serif is an intentional brief-led deviation from the concept mock.

### Spacing and layout rhythm

The opening composition matches the source's airy header, large centered hero, panoramic strip and divided trust band. Later sections maintain broad editorial planes, consistent section rhythm, fine rules and minimal elevation. No horizontal overflow was detected: at 375 px scroll width equals client width, at 768 px scroll width equals client width, and at 1440 px scroll width equals client width.

### Colors and visual tokens

The implementation maps the supplied aqua, blue, green, ink, mist and line tokens to a predominantly white layout. Dark ink and aqua backgrounds are reserved for transparency and contact, preserving the requested restraint. Text/background combinations are high contrast; focus indicators use the brand blue and remain visible on light and dark surfaces.

### Image quality and asset fidelity

The logo is a direct high-resolution crop from the supplied PDF, not a redraw. Alejandro's supplied portrait is optimized to WebP and retains a natural crop. The residential panorama was generated specifically for the site, optimized to WebP and used with subdued treatment. All images loaded successfully at natural resolution with descriptive alt text; the decorative repeat in the transparency section has empty alt text. No mockup screenshot, placeholder, CSS illustration, handcrafted SVG or fake dashboard is used as content.

### Copy and content

The copy is based on the supplied proposal and the validated content list. It avoids unverified metrics, testimonials, response times, certifications, honoraria, CUIT, birth date and third-party phone numbers. WhatsApp, Instagram and email URLs match the brief exactly. All local anchor targets resolve.

### Icons and interaction states

All UI icons come from one consistent thin-line icon family. Header navigation, mobile menu, anchor navigation, CTA states and the five-item native FAQ accordion were exercised in the in-app browser. The FAQ enforces one open item at a time and remains keyboard-operable through semantic `details` / `summary` controls.

## Comparison history

### Iteration 1 - blocked

- [P1] Mobile menu did not fully cover the underlying hero.
  - Evidence: `C:\Grupo Consolidar\web\tmp\qa\mobile-menu-open.png`
  - Cause: the header's backdrop filter created an unexpected containing block for the fixed mobile navigation.
  - Impact: navigation labels overlapped the hero, reducing readability and making the menu feel broken.
  - Fix: disabled the mobile backdrop filter, made the mobile header fully opaque and elevated the header row above the menu layer.

### Iteration 2 - passed

- Post-fix evidence: `C:\Grupo Consolidar\web\tmp\qa\mobile-menu-final.png`
- The menu covers the viewport, keeps the close control visible, locks body scrolling and closes after an anchor is selected.
- No actionable P0, P1 or P2 issues remain.

## Browser and functional verification

- Browser-rendered at 375 x 812, 768 x 1024, 1440 x 1000 and 1487 x 1058.
- Tested: desktop anchors, mobile menu open/close state, menu body lock, anchor close behavior, FAQ open/close behavior, exact WhatsApp URL, Instagram URL, email link and broken-anchor scan.
- Console warnings/errors: none.
- Images: all complete with non-zero natural widths.
- Heading check: exactly one H1.
- Build and Sites packaging tests: passed.

## Findings

No actionable P0, P1 or P2 findings remain.

## Open questions

- The generated architecture image should be replaced only if the client later supplies an authorized real community photograph.
- “Mar del Plata y zona” and the institutional legal note should receive final commercial/legal approval before publication.

## Implementation checklist

- [x] Exact brand logo and verified professional portrait
- [x] Responsive header and mobile navigation
- [x] Functional anchors and WhatsApp conversion path
- [x] Accessible FAQ accordion
- [x] Responsive verification at required widths
- [x] SEO title, description and Open Graph metadata
- [x] Reduced-motion support, focus visibility and image alt text
- [x] Production build and Sites package tests

## Follow-up polish

No blocking polish remains. A future iteration may substitute an approved real community photograph without changing the layout.

final result: passed
