import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://speyxadmdqsfbvxqxwjt.supabase.co/rest/v1',
    headers: {
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwZXl4YWRtZHFzZmJ2eHF4d2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MTgwOTAsImV4cCI6MjAyMzQ5NDA5MH0.M8vfclfm6RFn7SH48K9rD0-Q2h4IJtSlGgiWvgSy534",
        authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwZXl4YWRtZHFzZmJ2eHF4d2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MTgwOTAsImV4cCI6MjAyMzQ5NDA5MH0.M8vfclfm6RFn7SH48K9rD0-Q2h4IJtSlGgiWvgSy53"
    }
})