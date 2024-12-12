import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
    const { isLoading: isUpdating, updateSetting } = useUpdateSetting();
    const { isLoading, settings = {} } = useSettings();
    const {
        minBookingLength,
        maxBookingLength,
        maxGuestPerBooking,
        breakfastPrice,
    } = settings;


	const handleUpdate = (e, field) => {
		const {value} = e.target;

		if (!value) return;

		updateSetting({[field]: value});
	}

    if (isLoading) return <Spinner />;

    return (
        <Form>
            <FormRow label="Minimum nights/booking">
                <Input
                    type="number"
                    id="min-nights"
                    defaultValue={minBookingLength}
                    onBlur={(e) => handleUpdate(e, "minBookingLength")}
                    disabled={isUpdating}
                />
            </FormRow>
            <FormRow label="Maximum nights/booking">
                <Input
                    type="number"
                    id="max-nights"
                    defaultValue={maxBookingLength}
                    onBlur={(e) => handleUpdate(e, "maxBookingLength")}
                    disabled={isUpdating}
                />
            </FormRow>
            <FormRow label="Maximum guests/booking">
                <Input
                    type="number"
                    id="max-guests"
                    defaultValue={maxGuestPerBooking}
                    onBlur={(e) => handleUpdate(e, "maxGuestPerBooking")}
                    disabled={isUpdating}
                />
            </FormRow>
            <FormRow label="Breakfast price">
                <Input
                    type="number"
                    id="breakfast-price"
                    defaultValue={breakfastPrice}
                    onBlur={(e) => handleUpdate(e, "breakfastPrice")}
                    disabled={isUpdating}
                />
            </FormRow>
        </Form>
    );
}

export default UpdateSettingsForm;
