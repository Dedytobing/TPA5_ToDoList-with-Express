# **ToDoList RESTful API - Skilvul TPA 05**

---

## Documentation

### 1. **Create User**

- Endpoint: `/users/register`
- Method: `POST`
- Auth: YES
- Body:

  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```

  Example:

  ```json
  {
    "name": "Dedy Lumbantobing",
    "email": "dedy@gmail.com",
    "password": "123"
  }
  ```

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "status": 200,
      "message": "Akun berhasil dibuat",
      "data": {
        "name": "Dedy Lumbantobing",
        "email": "dedy@gmail.com",
        "password": "$2a$10$ew3gZKXnQGcPLG/8EdKXKe6mEkvCUOeNoXbyQGWOph6AGTQaBh5/y"
      }
    }
    ```

  - Error: `400 BAD REQUEST` || `409 CONFLICT` || `500 INTERNAL SERVER ERROR`

    Example:

    If there is an input is empty:

    ```json
    {
      "message": "Tolong isi semua input!"
    }
    ```

    If email is invalid:

    ```json
    {
      "message": "Email tidak valid!"
    }
    ```

    If email has already registered:

    ```json
    {
      "message": "Email sudah terdaftar!"
    }
    ```

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```

### 2. **Login User**

- Endpoint: `/users/login`
- Method: `POST`
- Auth: YES
- Body:

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

  Example:

  ```json
  {
    "email": "dedy@gmail.com",
    "password": "123"
  }
  ```

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "message": "Berhasil Login!",
      "token": "$2a$10$ew3gZKXnQGcPLG/8EdKXKe6mEkvCUOeNoXbyQGWOph6AGTQaBh5/y"
    }
    ```

  - Error: `400 BAD REQUEST` || `401 UNAUTHORIZED` || `500 INTERNAL SERVER ERROR`

    Example:

    If there is an input is empty:

    ```json
    {
      "message": "Tolong isi semua input!"
    }
    ```

    If email is invalid:

    ```json
    {
      "message": "Email tidak valid!"
    }
    ```

    If password is is wrong:

    ```json
    {
      "message": "Password salah!"
    }
    ```

    If account is unregistered:

    ```json
    {
      "message": "Akun anda belum terdaftar!"
    }
    ```

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```

### 3. **Get All User**

- Endpoint: `/users`
- Method: `GET`
- Auth: YES
- Body: -

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "message": "Berhasil mendapatkan semua pengguna",
      "data": [
        {
            "id": 1,
            "name": "Dedy",
            "email": "dedy@gmail.com",
            "password": "$2a$10$sTr4Znh1ZwKnZ.FRrIjOcO2eZZ/UHo0ny0chQVolmuCMRMts2kZuu",
            "createdAt": "2023-11-12T15:33:22.000Z",
            "updatedAt": "2023-11-12T15:33:22.000Z"
        },
        {
            "id": 2,
            "name": "Ivan",
            "email": "ivan@gmail.com",
            "password": "$2a$10$J651alb2i5F2kprYRw4I..dfBwfVrIKtZb.9ujCAWwmhDeQjnH1HW",
            "createdAt": "2023-11-12T15:40:46.000Z",
            "updatedAt": "2023-11-12T15:40:46.000Z"
        }
      ]
    }
    ```
### 4. **Get User By Id**

- Endpoint: `/users/:id`
- Method: `GET`
- Auth: YES
- Body: -

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "message": "Berhasil mendapatkan pengguna berdasarkan Id",
      "data": [
        {
            "id": 1,
            "name": "Dedy",
            "email": "dedy@gmail.com",
            "password": "$2a$10$sTr4Znh1ZwKnZ.FRrIjOcO2eZZ/UHo0ny0chQVolmuCMRMts2kZuu",
            "createdAt": "2023-11-12T15:33:22.000Z",
            "updatedAt": "2023-11-12T15:33:22.000Z"
        }
      ]
    }
    ```

  - Error: `500 INTERNAL SERVER ERROR`

    Example:

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```
### 5. **Get All Todo**

- Endpoint: `/todo`
- Method: `GET`
- Auth: YES
- Body: -

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "message": "Data berhasil ditampilkan!",
      "data": [
        {
          "id": 1,
          "name": "memasak nasi",
          "description": "Hari Minggu",
          "status": "Todo",
          "user_id": 1,
          "createdAt": "2023-11-12T15:38:40.000Z",
          "updatedAt": "2023-11-12T15:38:40.000Z"
        },
        {
          "id": 3,
          "name": "Coba Update Todo",
          "description": "Behasil Update",
          "status": "Done",
          "user_id": 1,
          "createdAt": "2023-11-13T02:17:55.000Z",
          "updatedAt": "2023-11-13T06:24:35.000Z"
        },
        {
          "id": 4,
          "name": "Berenang di lautan fakta",
          "description": "fakta or hoax",
          "status": "Todo",
          "user_id": 1,
          "createdAt": "2023-11-13T06:52:17.000Z",
          "updatedAt": "2023-11-13T06:52:17.000Z"
        }
      ]
    }
    ```

  - Error: `500 INTERNAL SERVER ERROR`

    Example:

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```
### 6. **Get Todo By Id**

- Endpoint: `/todo/:id`
- Method: `GET`
- Auth: YES
- Body: -

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "message": "Data berhasil ditampilkan!",
      "data": [
        {
          "id": 1,
          "name": "memasak nasi",
          "description": "Hari Minggu",
          "status": "Todo",
          "user_id": 1,
          "createdAt": "2023-11-12T15:38:40.000Z",
          "updatedAt": "2023-11-12T15:38:40.000Z"
        }
      ]
    }
    ```

  - Error: `500 INTERNAL SERVER ERROR`

    Example:

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```

### 7. **Add Todo**

- Endpoint: `/todo`
- Method: `POST`
- Auth: YES
- Body:

  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```

- Response:

  - Success: `201 CREATED`

    Example:

    ```json
    {
      "message": "Data berhasil ditampilkan!",
      "data": {
        "name": "Membereskan kacang dan beras",
        "description": "Kacang dan Beras Berserakan"
      }
    }
    ```

  - Error: `400 BAD REQUEST` || `500 INTERNAL SERVER ERROR`

    Example:

    If there is an input is empty:

    ```json
    {
      "message": "Tolong isi semua input!"
    }
    ```

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```

### 8. **Delete All Todo**

- Endpoint: `/todo`
- Method: `DELETE`
- Auth: YES
- Body: -

- Response:

  - Success: `204 NO CONTENT`

    Example:

    ```json
    {
      "message": "Semua data berhasil dihapus!"
    }
    ```

  - Error: `500 INTERNAL SERVER ERROR`

    Example:

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```
### 9. **Delete Todo By Id**

- Endpoint: `/todo/:id`
- Method: `DELETE`
- Auth: YES
- Body: -

- Response:

  - Success: `204 NO CONTENT`

    Example:

    ```json
    {
      "message": "Data berhasil dihapus!"
    }
    ```

  - Error: `404 NOT FOUND` || `500 INTERNAL SERVER ERROR`

        Example:

    If todo not found:

    ```json
        {
          "message": "Data tidak ditemukan!"
        }
     ```

    If the server get an error:

    ```json
        {
          "message": "Terjadi kesalahan server!",
          "error": <error message>,
        }
    ```

### 10. **Update Todo**

- Endpoint: `/todo/:id`
- Method: `PUT`
- Auth: YES
- Body:

  ```json
  {
    "name": "string",
    "description": "string",
    "status": "string"
  }
  ```

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "message": "Data berhasil diubah!"
    }
    ```

  - Error: `404 NOT FOUND` || `500 INTERNAL SERVER ERROR`

    Example:

    If todo not found:

    ```json
    {
      "message": "Data tidak ditemukan!"
    }
    ```

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```


## ***Link***
 For a more detailed and interactive experience, please check out our :

- [![Postman Documentation](https://img.shields.io/badge/Postman-Documentation-orange)]()
- [![Deploy](https://img.shields.io/badge/Link-Deploy-blue)]()
