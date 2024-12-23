import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputDropdown from '@/Components/InputDropdown';
import InputCheckbox from '@/Components/InputCheckbox';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ClientCreateJob() {
    const cities = [
        "Aceh", "Ambon", "Bali", "Banjarmasin", "Bandung", "Banjarbaru", "Banyuwangi",
        "Batam", "Bekasi", "Bengkulu", "Blitar", "Bogor", "Bukittinggi", "Cirebon",
        "Denpasar", "Depok", "Dumai", "Gorontalo", "Jakarta", "Jambi", "Jayapura",
        "Kediri", "Kendari", "Kupang", "Lampung", "Madiun", "Makassar", "Malang",
        "Manado", "Mataram", "Medan", "Palangkaraya", "Palembang", "Pekanbaru",
        "Pontianak", "Probolinggo", "Purwokerto", "Semarang", "Serang", "Singkawang",
        "Surabaya", "Sukabumi", "Sumedang", "Sungai Penuh", "Surakarta", "Tangerang",
        "Tegal", "Cimahi", "Cilegon", "Ciputat", "Deli Serdang",
        "Gresik", "Jakarta Selatan", "Jakarta Timur", "Jakarta Utara", "Jember",
        "Karawang", "Kuningan", "Lhokseumawe", "Maluku Utara", "Makale",
        "Manggarai", "Mojokerto", "Pangkal Pinang", "Pati", "Purwakarta", "Samarinda",
        "Sidoarjo", "Sleman", "Sragen", "Tanjung Pinang", "Ternate", "Yogyakarta",
        "Magelang", "Bojonegoro"
    ]

    const { data, setData, post } = useForm({
        name: '',
        location: 'Medan',
        salary: '',
        type: 'Full-time',
        description: '',
        accessibility: [],
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.name || !data.location || !data.salary || !data.description) {
            setErrors({ ...errors, form: 'Please fill in all required fields' });
            return;
        }

        post(route('jobs.store'), {
            data: data,
            onError: (errors) => setErrors(errors),
            onSuccess: () => {
                redirect(route('client-dashboard'));
            },
        });
    };



    const accessibilityOptions = [
        { label: 'Partially Blind', value: 'partially_blind', category: 'Vision' },
        { label: 'Color Blind', value: 'color_blind', category: 'Vision' },
        { label: 'Low Vision', value: 'low_vision', category: 'Vision' },

        { label: 'Hard of Hearing', value: 'hard_of_hearing', category: 'Hearing' },
        { label: 'Deaf (with accommodations)', value: 'deaf_with_accommodations', category: 'Hearing' },

        { label: 'Limited Dexterity', value: 'limited_dexterity', category: 'Motor' },
        { label: 'Arthritis', value: 'arthritis', category: 'Motor' },
        { label: 'Repetitive Strain Injury (RSI)', value: 'rsi', category: 'Motor' },
        { label: 'Amputee (prosthetics)', value: 'amputee', category: 'Motor' },

        { label: 'Dyslexia', value: 'dyslexia', category: 'Cognitive' },
        { label: 'Attention Deficit Hyperactivity Disorder (ADHD)', value: 'adhd', category: 'Cognitive' },
        { label: 'Mild Cognitive Impairment', value: 'mild_cognitive_impairment', category: 'Cognitive' },

        { label: 'Stuttering', value: 'stuttering', category: 'Speech' },
        { label: 'Non-verbal (with assistive devices)', value: 'non_verbal_with_assistive_devices', category: 'Speech' },

        { label: 'Anxiety Disorder', value: 'anxiety_disorder', category: 'Mental Health' },
        { label: 'Depression', value: 'depression', category: 'Mental Health' },
        { label: 'Bipolar Disorder', value: 'bipolar_disorder', category: 'Mental Health' },

        { label: 'Chronic Pain', value: 'chronic_pain', category: 'Other' },
        { label: 'Fatigue (Chronic Fatigue Syndrome)', value: 'fatigue', category: 'Other' },
        { label: 'Multiple Sclerosis (with mild symptoms)', value: 'multiple_sclerosis_mild', category: 'Other' },
        { label: 'Parkinsons Disease (early stages)', value: 'parkinsons_disease_early', category: 'Other' }
    ];

    return (
        <AuthenticatedLayout client={true}>
            <Head title="Create Job" />
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border my-9">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6" aria-labelledby="create-job-heading">Create a new job</h1>
                <form onSubmit={handleSubmit} aria-labelledby="create-job-form">
                    {/* Job Name */}
                    <div className="mb-4">
                        <InputLabel htmlFor="name" value="Job Name" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="mt-1 block w-full"
                            required
                            aria-required="true"
                        />
                        {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                    </div>

                    {/* Job Location */}
                    <div className="mb-4">
                        <InputDropdown
                            label="Location"
                            value={data.location}
                            options={cities}
                            onChange={(location) => setData('location', location)}
                            className="p-3"
                            aria-labelledby="location-label"
                        />
                    </div>

                    {/* Salary */}
                    <div className="mb-4">
                        <InputLabel htmlFor="salary" value="Salary" />
                        <TextInput
                            id="salary"
                            name="salary"
                            type="number"
                            min="0"
                            value={data.salary}
                            onChange={(e) => setData('salary', e.target.value)}
                            className="mt-1 block w-full"
                            required
                            aria-required="true"
                        />
                        {errors.salary && <div className="text-red-500 text-sm">{errors.salary}</div>}
                    </div>

                    {/* Job Type Dropdown */}
                    <div className="mb-4">
                        <InputDropdown
                            label="Job Type"
                            value={data.type}
                            options={['Full-time', 'Part-time', 'Intern']}
                            onChange={(value) => setData('type', value)}
                            aria-labelledby="type-label"
                        />
                        {errors.type && <div className="text-red-500 text-sm">{errors.type}</div>}
                    </div>

                    {/* Job Description */}
                    <div className="mb-4">
                        <InputLabel htmlFor="description" value="Job Description" />
                        <textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                            aria-required="true"
                        />
                        {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
                    </div>

                    {/* Accessibility Checkboxes */}
                    <div className="mb-4">
                        <InputLabel htmlFor="accessibility" value="Accessibility" />
                        <div className="grid grid-cols-2 gap-4">
                            {['Vision', 'Hearing', 'Motor', 'Cognitive', 'Speech', 'Mental Health', 'Other'].map(category => (
                                <div key={category}>
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2" id={`${category.toLowerCase()}-label`}>{category}</h3>
                                    <div className="space-y-2">
                                        {accessibilityOptions.filter(option => option.category === category).map((option) => (
                                            <InputCheckbox
                                                key={option.value}
                                                id={option.value}
                                                label={option.label}
                                                checked={data.accessibility.includes(option.value)}
                                                onChange={(e) => {
                                                    const updatedAccessibility = e.target.checked
                                                        ? [...data.accessibility, option.value]
                                                        : data.accessibility.filter(item => item !== option.value);

                                                    setData('accessibility', updatedAccessibility);

                                                    console.log("Updated Accessibility (array):", updatedAccessibility);
                                                }}
                                                aria-labelledby={`${category.toLowerCase()}-label`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {errors.accessibility && <div className="text-red-500 text-sm">{errors.accessibility}</div>}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-6">
                        <PrimaryButton type="submit" className='w-1/2 justify-center py-2' aria-label="Create Job">
                            Create Job
                        </PrimaryButton>
                    </div>

                    {/* Error Message */}
                    {errors.form && <div className="text-red-500 text-sm mt-3">{errors.form}</div>}
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
