import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Apply(id) {
    const { data, setData, post } = useForm({
        cv: null,
        resume: null,
        description: '',
    });

    const [errors, setErrors] = useState({});

    const handleFileChange = (e, setter) => {
        const file = e.target.files[0];
        setter(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.cv || !data.resume || !data.description) {
            setErrors({ ...errors, form: 'Please fill in all required fields and upload both files.' });
            return;
        }

        const formData = new FormData();
        formData.append('cv', data.cv);
        formData.append('resume', data.resume);
        formData.append('description', data.description);

        post(`/worker/apply/${id['id']}`, {
            data: formData,
            onError: (errors) => setErrors(errors),
            onSuccess: () => {
                redirect(route('applications'));
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Apply for Job" />
            <div className="max-w-xl mx-auto p-6 border border-gray-200 rounded-lg shadow-sm bg-white mt-10">
                <h2 className="text-2xl font-bold mb-4" id="apply-job-heading">Apply for Job</h2>

                <form onSubmit={handleSubmit} aria-labelledby="apply-job-heading">
                    <div className="mb-4">
                        <InputLabel value="Upload CV" />
                        <label
                            htmlFor="cv-upload"
                            className="inline-block w-full cursor-pointer bg-secondary text-white py-2 px-4 text-center rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label="Upload CV"
                        >
                            {data.cv ? data.cv.name : "Choose a CV file"}
                        </label>
                        <input
                            type="file"
                            id="cv-upload"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => handleFileChange(e, (file) => setData('cv', file))}
                            className="hidden"
                            aria-describedby="cv-upload-description"
                        />
                        {errors.cv && <div className="text-red-500 text-sm" id="cv-upload-description">{errors.cv}</div>}
                    </div>

                    <div className="mb-4">
                        <InputLabel value="Upload Resume" />
                        <label
                            htmlFor="resume-upload"
                            className="inline-block w-full cursor-pointer bg-secondary text-white py-2 px-4 text-center rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label="Upload Resume"
                        >
                            {data.resume ? data.resume.name : "Choose a Resume file"}
                        </label>
                        <input
                            type="file"
                            id="resume-upload"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => handleFileChange(e, (file) => setData('resume', file))}
                            className="hidden"
                            aria-describedby="resume-upload-description"
                        />
                        {errors.resume && <div className="text-red-500 text-sm" id="resume-upload-description">{errors.resume}</div>}
                    </div>

                    <div className="mb-4">
                        <InputLabel value="Cover Letter/Description" />
                        <textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                            aria-required="true"
                            aria-label="Cover letter/Description field"
                        />
                        {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
                    </div>

                    <div className="flex justify-center mt-6">
                        <PrimaryButton type="submit" className="w-1/2 justify-center py-2" aria-label="Submit application">
                            Apply for Job
                        </PrimaryButton>
                    </div>
                </form>
                {errors.form && <div className="text-red-500 text-sm mt-4" aria-live="assertive">{errors.form}</div>}
            </div>
        </AuthenticatedLayout>
    );
}
