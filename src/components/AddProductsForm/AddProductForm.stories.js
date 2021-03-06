import "../../index.css";
import AddProductsForm from "./"
//๐ This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title     : 'Add Products Form',
	component : AddProductsForm,
	argTypes  : {
	},
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <AddProductsForm {...args} />;

export const exampleAddProductsForm = Template.bind({});

exampleAddProductsForm.args = {
	/*๐ The args you need here will depend on your component */
	addProduct: console.log("product added")
};
