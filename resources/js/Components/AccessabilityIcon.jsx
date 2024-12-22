export default function AccessabilityIcon( category ) {
    console.log(category['category']);
    const accessibility = {
        'Vision': {
            'icon': 'fa fa-eye-slash',
            'label': 'Dapat diikuti oleh orang dengan gangguan penglihatan',
            'color': 'text-red-500'
        },
        'Hearing': {
            'icon': 'fa fa-ear-deaf',
            'label': 'Dapat diikuti oleh orang dengan gangguan pendengaran',
            'color': 'text-green-500'
        },
        'Motor': {
            'icon': 'fa fa-wheelchair',
            'label': 'Dapat diikuti oleh orang dengan keterbatasan mobilitas',
            'color': 'text-blue-500'
        },
        'Cognitive': {
            'icon': 'fa fa-brain',
            'label': 'Dapat diikuti oleh orang dengan gangguan kognitif',
            'color': 'text-yellow-500'
        },
        'Speech': {
            'icon': 'fa fa-comment',
            'label': 'Dapat diikuti oleh orang dengan gangguan bicara',
            'color': 'text-purple-500'
        },
        'Mental Health': {
            'icon': 'fa fa-brain',
            'label': 'Dapat diikuti oleh orang dengan gangguan mental',
            'color': 'text-pink-500'
        },
        'Other': {
            'icon': 'fa fa-heart',
            'label': 'Dapat diikuti oleh orang dengan gangguan lainnya',
            'color': 'text-gray-500'
        }
    };

    return (
        <li className="flex items-center mt-3 mx-1.5 group relative">
            <i className={`${accessibility[category['category']].icon} ${accessibility[category['category']].color} text-lg group-hover:opacity-50 transition-opacity duration-300`}></i>
            <span className="absolute top-full left-0 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded-md mt-1">
                {accessibility[category['category']].label}
            </span>
        </li>
    );
}
