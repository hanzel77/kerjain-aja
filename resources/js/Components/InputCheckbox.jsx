export default function InputCheckbox({ id, name, label, checked, onChange }) {
    return (
        <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor={id} className="text-sm text-gray-700">{label}</label>
        </div>
    );
}