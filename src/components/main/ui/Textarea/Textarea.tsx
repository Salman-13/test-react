import './Textarea.scss';

interface TextareaProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

export const Textarea = ({ value, onChange, placeholder }: TextareaProps) => {


    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    }; 

    return (
        <textarea 
            className="textarea"
            value={value && value}
            onChange={onChange && onChangeHandler}
            placeholder={placeholder && placeholder}
           />
    );
};
export default Textarea;