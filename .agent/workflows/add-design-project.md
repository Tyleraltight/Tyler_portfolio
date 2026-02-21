---
description: How to add a new image-based design project to the portfolio
---

# Add New Design Project (Image)

Follow these steps to add a new image-based project to the Design & AI Visuals row.

## 1. Place the image file

Copy the image to `src/assets/`. Example: `src/assets/MY_IMAGE.jpg`

## 2. Update `src/data/projects.ts`

### 2a. Add import at the top of the file

```ts
import myImg from '../assets/MY_IMAGE.jpg'
```

### 2b. Add a new object to the `designProjects` array

Use this exact template (matches the AI Fashion video project format):

```ts
  {
    id: 'my-project-id',
    category: 'design',
    kind: 'ai-visual',
    title: 'Project Title',
    subtitle: 'Category Label',          // e.g. 'Voxel Art', 'AI Video'
    description:
      'One-line description of the project.',
    stack: ['Tool1', 'Tool2'],
    image: myImg,                         // use the imported variable
    tags: ['Tag1', 'Tag2', 'Tag3'],       // shown as pills in the modal
    concept:
      'One concise sentence about the concept.',
    workflow:
      'One concise sentence about the workflow.',
    useCase:
      'One concise sentence about the use case.',
  },
```

**Key rules:**
- `concept`, `workflow`, `useCase` should each be **one concise sentence** (not paragraphs)
- `tags` are displayed as pill badges at the bottom of the modal
- `image` must be an **imported variable**, not a raw string path (Vite requires this for builds)

## 3. No other files need changes

The following are already handled automatically:
- **Bento card** in `FeaturedProjectsSection.tsx`: The `designProjects.map()` loop renders the card with the image + "View ↗" badge
- **Modal**: Opens on click with side-by-side layout (image left, description right) using `object-fit: contain` to preserve aspect ratio
- **Case Study section** in modal: Renders Concept / Workflow / Use Case / Tags
- **Responsive**: Mobile auto-stacks to vertical layout

## 4. Verify

Refresh the browser at `http://localhost:5173/` and:
1. Confirm the new card appears in the Design & AI Visuals row with the image and "View ↗" badge
2. Click the card — modal should show image on the left, case study on the right
3. Image should NOT be stretched (maintains original aspect ratio)
