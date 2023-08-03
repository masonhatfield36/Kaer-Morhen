import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';
import useFetch, { COLORS, icons, SIZES } from '../../hook/useFetch';

const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch('job-details', { job_id: params.id })

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {}

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightwhite }}>
            <Stack.Screen options={{ headerStyle: { backgroundColor: COLORS.lightwhite },
            headerShadowVisible: false, headerBackVisible: false, headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" handlePress={() => router.back()} />
            ),
            headerRight: () => (
                <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
            ),
            headerTitle: ''
            }}
            />

            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                </ScrollView>
            </>
        </SafeAreaView>
    )
}

export default JobDetails