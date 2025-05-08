import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { auth } = usePage().props;
    const user = auth.user;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>

                    <div className="mt-6 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h3 className="mb-4 text-lg font-medium text-gray-900">ユーザー情報</h3>
                            <div className="space-y-2">
                                <div className="flex">
                                    <span className="w-32 font-semibold text-gray-700">名前:</span>
                                    <span className="text-gray-900">{user.name}</span>
                                </div>
                                <div className="flex">
                                    <span className="w-32 font-semibold text-gray-700">メールアドレス:</span>
                                    <span className="text-gray-900">{user.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
