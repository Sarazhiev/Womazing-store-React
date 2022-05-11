
const CreateSizes = ({sizes, setSizes , size}) => {
    return (
        <li onClick={() => {
            if (sizes.includes(size)) {
                setSizes(sizes.filter(item => item !== size))
            } else {
                setSizes([...sizes, size])
            }
        }} className={`product__content-size create__form-size  ${sizes.includes(size) ? 'create__size' : ''  }`}>{size}</li>
    );
};

export default CreateSizes;