# How to Link a Library into the Project

Once you have a library set up, ie built and linked into your global node_modules (See npm-link-instructions in commons-ecosystem), you can link that library into your project.

These are the steps:
1. Make sure the dependency you want to link exists in the package.json (@commons/ecosystem does already)
2. Link the dependency ```npm link <dependency>``` e.g. ```npm link @commons/ecosystem```
3. There is a problem that occurs using React Hooks to inject state through a linked component. This can be fixed by using npm link on the react module in node modules see this [issue](https://github.com/facebook/react/issues/13991#issuecomment-474967647).

That's it. You can check it has linked properly, as well as the contents of what was linked in the node_modules folder. Linked dependencies show a small black arrow over the folder. 

You should now be able to have this project running locally, make a change locally to the library, rebuild the library and the project should recompile in the browser.