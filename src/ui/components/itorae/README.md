# ATOMICS DESIGN ADOPTION

I love a codebase with a clear and clean folder structure, that's why i'm trying to implement ATOMICS structure now and see how it goes :

1. Atoms

This should be a smaller components like buttons and inputs. All components should be reusable as we're going to use this in Molecules.

2. Molecules

This should be a group of components like buttons and input combines, forming a form for instance.

3. Organisms

This is a complete components, like cards, dialogs or dropdowns for instances. This is build by using Atoms and Molecules.

4. Templates

Templates is a layout of a page, let say "signin". This will consist layouts and all Atomics component including Molecules and Organism.
