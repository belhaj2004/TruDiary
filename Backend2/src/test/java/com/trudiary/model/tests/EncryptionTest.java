package com.trudiary.model.tests;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.junit.jupiter.api.Assertions.assertNotEquals;

import com.password4j.Hash;
import com.password4j.Password;
import com.trudiary.model.User;

public class EncryptionTest {

    @Test
    public void testUserCreatePasswordHashes() {
        String testPassword = "testPass";
        User user = new User();
        user.setPassword(testPassword);
        String encrypted = user.getPassword();
        System.out.println("Before encryption: " + testPassword);
        System.out.println("After encryption: " + encrypted);
        assertNotEquals(encrypted, testPassword);
        boolean check = Password.check(testPassword, encrypted).withArgon2();
        assertEquals(check, true);
        assertNotEquals("TeSTpASS", encrypted);
    }
}