package com.jalenhairstonInsight.springboottestexampletests.utils;

import org.apiguardian.api.API;

public class APIConnectionInfo {
    private static final String BASE_URL = "http://localhost:";
    private static final String PORT = "8080";
    private static final String API_ENDPOINT = "/api/v1/employees";

    public static String getConnectionString() {
        return BASE_URL + PORT + API_ENDPOINT;
    }
}
